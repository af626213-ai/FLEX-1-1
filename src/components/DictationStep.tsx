import React, { useState, useRef, useEffect, useMemo } from 'react';
import { CheckCircle2, HelpCircle, Volume2, Square, ArrowRight, Mic } from 'lucide-react';

interface DictationStepProps {
  script: string;
  items: string[];
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ script, items, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [isQuestionComplete, setIsQuestionComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- 演出ロジック ---
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

  const triggerWordSuccess = () => {
    const audio = new Audio('/correct.mp3');
    audio.volume = 0.4;
    audio.play().catch(() => {});
    fireConfetti();
  };

  // --- センテンス抽出ロジック（ここを修正） ---
  const questions = useMemo(() => {
    // スクリプトを文末記号で分割して「文」の配列を作る
    const sentences = script.split(/(?<=[.!?])\s+/);
    
    return items.map((item) => {
      // items(フレーズ)が含まれている一文を探す
      const targetSentence = sentences.find(s => s.toLowerCase().includes(item.toLowerCase())) || item;
      
      const lowerSentence = targetSentence.toLowerCase();
      const lowerItem = item.toLowerCase();
      const targetIdx = lowerSentence.indexOf(lowerItem);

      if (targetIdx !== -1) {
        return {
          before: targetSentence.substring(0, targetIdx),
          hiddenWord: targetSentence.substring(targetIdx, targetIdx + item.length),
          after: targetSentence.substring(targetIdx + item.length),
          full: targetSentence
        };
      }
      return { before: "", hiddenWord: item, after: "", full: item };
    });
  }, [script, items]);

  const question = questions[currentIndex];
  const words = useMemo(() => question.hiddenWord.split(' ').filter(w => w.length > 0), [question.hiddenWord]);

  const parseWord = (rawWord: string) => {
    const clean = rawWord.replace(/[^a-zA-Z0-9'-]/g, '');
    if (!clean) return { prefix: rawWord, text: '', suffix: '' };
    const idx = rawWord.indexOf(clean);
    return {
      prefix: rawWord.substring(0, idx),
      text: clean,
      suffix: rawWord.substring(idx + clean.length)
    };
  };

  // ライフサイクル
  useEffect(() => {
    if (!isQuestionComplete && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, activeWordIndex, isQuestionComplete]);

  useEffect(() => {
    setActiveWordIndex(0);
    setCurrentInput('');
    setIsQuestionComplete(false);
    setShowHint(false);
    setIsError(false);
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); setIsPlaying(false); }
  }, [currentIndex]);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { 
        // スクリプト全文ではなく、今解いている「文」だけを読み上げる
        const utterance = new SpeechSynthesisUtterance(question.full);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\s/g, '');
    setCurrentInput(val);
    const targetWordObj = parseWord(words[activeWordIndex]);
    const cleanTarget = targetWordObj.text.toLowerCase();
    const cleanInput = val.toLowerCase();

    if (cleanInput.length > 0 && !cleanTarget.startsWith(cleanInput)) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    if (cleanInput === cleanTarget && cleanTarget.length > 0) {
      triggerWordSuccess();
      if (activeWordIndex < words.length - 1) {
        setActiveWordIndex(prev => prev + 1);
        setCurrentInput('');
        setIsError(false);
      } else {
        setIsQuestionComplete(true);
        setActiveWordIndex(words.length);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 4: Dictation</h2>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8">
        <div className="flex justify-between items-center px-2">
          <span className="text-sm font-black text-orange-400 uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</span>
          <button onClick={handlePlay} className="p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-all">
            {isPlaying ? <Square size={20} /> : <Volume2 size={20} />}
          </button>
        </div>

        {/* センテンス表示エリア */}
        <div className="py-10 px-8 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 min-h-[180px] flex items-center justify-center">
          <div className="text-xl md:text-2xl text-slate-800 leading-relaxed text-center">
            {/* ターゲットが含まれる一文の前半を表示 */}
            <span className="text-slate-600">{question.before}</span>
            
            <span className="mx-1 inline-flex flex-wrap gap-x-2 items-center">
              {words.map((word, index) => {
                const { prefix, text, suffix } = parseWord(word);
                const isCompleted = index < activeWordIndex;
                const isActive = index === activeWordIndex && !isQuestionComplete;
                return (
                  <span key={index} className="inline-flex items-center">
                    {prefix && <span>{prefix}</span>}
                    {isCompleted ? (
                      <span className="text-orange-600 font-bold border-b-4 border-orange-500 px-1">{text}</span>
                    ) : isActive ? (
                      <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={handleInputChange}
                        className={`px-1 bg-white border-b-4 outline-none font-bold text-center transition-all focus:border-orange-600 rounded-t-lg ${
                          isError ? 'text-red-500 border-red-500' : 'text-slate-900 border-orange-400'
                        }`}
                        style={{ width: `${Math.max(text.length, 3)}ch` }}
                        autoFocus
                      />
                    ) : (
                      <span className="text-slate-300 font-mono tracking-tighter px-1">{'_'.repeat(text.length)}</span>
                    )}
                    {suffix && <span>{suffix}</span>}
                  </span>
                );
              })}
            </span>

            {/* ターゲットが含まれる一文の後半を表示 */}
            <span className="text-slate-600">{question.after}</span>
          </div>
        </div>

        {!isQuestionComplete ? (
          <div className="flex justify-center pt-2">
            <button onClick={() => setShowHint(true)} className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors font-bold text-sm">
              <HelpCircle size={18} />
              <span>{showHint ? `Hint: It starts with "${words[activeWordIndex][0]}"` : "Need a Hint?"}</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl text-emerald-800">
              <CheckCircle2 className="text-emerald-500" size={28} />
              <p className="text-xl font-black">Correct!</p>
            </div>
            <button
              onClick={() => { if (currentIndex < questions.length - 1) setCurrentIndex(c => c + 1); else onNext(); }}
              className="w-full py-5 bg-orange-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3"
            >
              <span>{currentIndex < questions.length - 1 ? 'Next Sentence' : 'Finish Dictation'}</span>
              <ArrowRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
