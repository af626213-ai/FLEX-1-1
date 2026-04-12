import React, { useState, useEffect } from 'react';
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
  const [currentBuffer, setCurrentBuffer] = useState('');
  const [isPhraseComplete, setIsPhraseComplete] = useState(false);

  const currentPhrase = items[currentIndex];
  const targetWords = currentPhrase ? currentPhrase.split(/\s+/) : [];

  // フレーズが含まれる一文を取得
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
    if ((window as any).confetti) {
      (window as any).confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f97316', '#fbbf24', '#ffffff']
      });
    } else {
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
    }
  };

  const playCorrectSound = () => {
    const audio = new Audio('/correct.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  // キー入力を直接監視
  useEffect(() => {
    if (isPhraseComplete) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // アルファベットと特定の記号のみ許可
      if (!/^[a-zA-Z0-9]$/.test(e.key) && e.key !== ' ' && e.key !== 'Backspace') return;

      if (e.key === 'Backspace') {
        setCurrentBuffer(prev => prev.slice(0, -1));
        return;
      }

      const newBuffer = (currentBuffer + e.key).toLowerCase().trim();
      const targetWord = targetWords[wordIndex].toLowerCase().replace(/[.,!?]/g, '');

      if (newBuffer === targetWord) {
        // --- 1単語正解時の処理 ---
        playCorrectSound();
        fireConfetti();
        
        if (wordIndex < targetWords.length - 1) {
          setWordIndex(prev => prev + 1);
          setCurrentBuffer('');
        } else {
          setIsPhraseComplete(true);
          setCurrentBuffer('');
        }
      } else {
        setCurrentBuffer(newBuffer);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBuffer, wordIndex, targetWords, isPhraseComplete]);

  useEffect(() => {
    if (targetSentence) speak(targetSentence);
  }, [currentIndex]);

  const handleNextPhrase = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setWordIndex(0);
      setIsPhraseComplete(false);
      setCurrentBuffer('');
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <Mic size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 4: Dictation</h2>
        <p className="text-slate-400 text-sm font-bold">Type the words you hear!</p>
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
          <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-center px-6 py-12 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 relative overflow-hidden">
            <div className="mb-6 text-[10px] text-slate-300 uppercase tracking-[0.3em]">Context Preview</div>
            
            {targetSentence.split(new RegExp(`(${currentPhrase})`, 'i')).map((part, i) => {
              if (part.toLowerCase() === currentPhrase.toLowerCase()) {
                return (
                  <span key={i} className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1 mx-1 px-3 py-2 bg-orange-50 rounded-xl border-2 border-orange-100">
                    {targetWords.map((word, wIdx) => {
                      const isDone = wIdx < wordIndex || isPhraseComplete;
                      const isCurrent = wIdx === wordIndex && !isPhraseComplete;
                      return (
                        <span 
                          key={wIdx} 
                          className={`transition-all duration-300 ${isDone ? "text-emerald-600" : isCurrent ? "text-orange-500 animate-pulse" : "text-slate-200"}`}
                        >
                          {isDone ? word : word.replace(/[a-zA-Z0-9]/g, '_')}
                        </span>
                      );
                    })}
                  </span>
                );
              }
              return <span key={i} className="text-slate-400/60 font-medium">{part}</span>;
            })}
          </div>

          {/* 入力欄（Inputタグ）は撤廃し、案内のみ表示 */}
          {!isPhraseComplete && (
            <div className="py-4 animate-bounce">
              <span className="px-6 py-2 bg-slate-800 text-white rounded-full text-xs font-black tracking-widest uppercase">
                Now Typing: {targetWords[wordIndex]?.replace(/[.,!?]/g, '').charAt(0)}...
              </span>
            </div>
          )}

          {isPhraseComplete && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-6 bg-emerald-50 rounded-[24px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={50} className="text-emerald-500 mb-2" />
                <span className="text-emerald-700 font-black text-2xl">Phrase Complete!</span>
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
