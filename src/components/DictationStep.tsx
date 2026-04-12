import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle, Volume2, ChevronRight } from 'lucide-react';

interface DictationStepProps {
  script: string;
  items: string[];
  rate: number;
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ script, items, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isPhraseComplete, setIsPhraseComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentPhrase = items[currentIndex];
  const targetWords = currentPhrase ? currentPhrase.split(/\s+/) : [];

  const getTargetSentence = () => {
    if (!currentPhrase) return "";
    const sentences = script.split(/(?<=[.!?])\s+/);
    return sentences.find(s => s.toLowerCase().includes(currentPhrase.toLowerCase())) || currentPhrase;
  };

  const targetSentence = getTargetSentence();

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 1.0;
      window.speechSynthesis.speak(u);
    }
  };

  const fireConfetti = () => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    scriptTag.onload = () => {
      (window as any).confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f97316', '#fbbf24', '#ffffff']
      });
    };
    document.head.appendChild(scriptTag);
  };

  const playCorrectSound = () => {
    const audio = new Audio('/correct.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  // 1単語ごとのリアルタイム判定
  useEffect(() => {
    if (isPhraseComplete || !targetWords[wordIndex]) return;

    const cleanUser = userInput.toLowerCase().trim().replace(/[.,!?]/g, '');
    const cleanTarget = targetWords[wordIndex].toLowerCase().trim().replace(/[.,!?]/g, '');

    if (cleanUser === cleanTarget && cleanUser.length > 0) {
      playCorrectSound();
      fireConfetti();

      if (wordIndex < targetWords.length - 1) {
        setWordIndex(prev => prev + 1);
        setUserInput('');
      } else {
        setIsPhraseComplete(true);
        setUserInput('');
      }
    }
  }, [userInput]);

  useEffect(() => {
    if (targetSentence) speak(targetSentence);
  }, [currentIndex]);

  // 次のワードへ進んだ時に自動でフォーカスを当てる
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [wordIndex, isPhraseComplete]);

  const handleNextPhrase = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setWordIndex(0);
      setIsPhraseComplete(false);
      setUserInput('');
    } else {
      onNext();
    }
  };

  if (!currentPhrase) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <Mic size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 4: Dictation</h2>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8 text-center">
        <button
          onClick={() => speak(targetSentence)}
          className="mx-auto flex items-center gap-3 px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-black hover:bg-orange-200 transition-all active:scale-95 shadow-sm"
        >
          <Volume2 size={24} />
          <span>Listen Sentence</span>
        </button>

        <div className="space-y-6">
          <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-left px-6 py-12 bg-slate-50 rounded-[40px] border-2 border-slate-100 shadow-inner">
            {targetSentence.split(new RegExp(`(${currentPhrase})`, 'i')).map((part, i) => {
              if (part.toLowerCase() === currentPhrase.toLowerCase()) {
                return (
                  <span key={i} className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 mx-1 px-4 py-2 bg-white rounded-2xl border-2 border-orange-100 shadow-sm">
                    {targetWords.map((word, wIdx) => {
                      const isDone = wIdx < wordIndex || isPhraseComplete;
                      const isCurrent = wIdx === wordIndex && !isPhraseComplete;

                      if (isDone) {
                        return <span key={wIdx} className="text-emerald-600">{word}</span>;
                      }
                      if (isCurrent) {
                        return (
                          <input
                            key={wIdx}
                            ref={inputRef}
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="w-24 md:w-32 bg-orange-50 border-b-4 border-orange-500 outline-none text-orange-600 text-center animate-pulse"
                            autoFocus
                          />
                        );
                      }
                      return <span key={wIdx} className="text-slate-200">{"_".repeat(word.length)}</span>;
                    })}
                  </span>
                );
              }
              return <span key={i} className="text-slate-400 font-medium">{part}</span>;
            })}
          </div>

          {isPhraseComplete && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-8 bg-emerald-50 rounded-[32px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={50} className="text-emerald-500 mb-2" />
                <span className="text-emerald-700 font-black text-2xl">Excellent!</span>
              </div>
              <button
                onClick={handleNextPhrase}
                className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>{currentIndex < items.length - 1 ? 'Next Phrase' : 'Complete Step'}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
