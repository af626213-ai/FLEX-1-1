import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle, AlertCircle, Volume2, ChevronRight } from 'lucide-react';

interface DictationStepProps {
  script: string;
  items: string[]; 
  rate: number;
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ script, items, rate, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentAnswer = items[currentIndex];

  // 全文の中から、currentAnswerを含む「1つのセンテンス」だけを抽出して ______ に置換する関数
  const getTargetSentence = () => {
    if (!currentAnswer) return "";
    
    // 文の区切り（. ! ?）でスクリプトを分割
    const sentences = script.split(/(?<=[.!?])\s+/);
    // 現在の答えが含まれている文を探す
    const target = sentences.find(s => s.toLowerCase().includes(currentAnswer.toLowerCase())) || currentAnswer;
    
    // その文の中の正解箇所を ______ に置換（大文字小文字を区別せず、最初の一致箇所）
    const regex = new RegExp(currentAnswer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    return target.replace(regex, ' ______ ');
  };

  // 読み上げ速度の微調整
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      
      // ブラウザの1.1倍は速すぎるため、係数をかけて抑制 (例: メニュー1.1x → 内部0.77x)
      // 0.8x 〜 1.1x の範囲が実用的になるよう調整
      u.rate = rate * 0.7; 
      
      window.speechSynthesis.speak(u);
    }
  };

  // 紙吹雪エフェクト（正解時）
  const fireConfetti = () => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    scriptTag.onload = () => {
      (window as any).confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fbbf24', '#ffffff']
      });
    };
    document.head.appendChild(scriptTag);
  };

  useEffect(() => {
    if (currentAnswer) speak(currentAnswer);
  }, [currentIndex]);

  const checkAnswer = () => {
    const cleanUser = userInput.toLowerCase().trim().replace(/[.,!?]/g, '');
    const cleanAnswer = currentAnswer.toLowerCase().trim().replace(/[.,!?]/g, '');

    if (cleanUser === cleanAnswer) {
      setIsCorrect(true);
      const audio = new Audio('/correct.mp3');
      audio.volume = 0.4;
      audio.play().catch(() => {});
      fireConfetti(); // クラッカー演出
      speak(currentAnswer);
    } else {
      setIsCorrect(false);
      const audio = new Audio('/wrong.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setIsCorrect(null);
      setShowHint(false);
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
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8 text-center">
        <button
          onClick={() => speak(currentAnswer)}
          className="mx-auto flex items-center gap-3 px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-black hover:bg-orange-200 transition-all active:scale-95 shadow-sm"
        >
          <Volume2 size={24} />
          <span>Listen</span>
        </button>

        <div className="space-y-6">
          {/* 文脈の1文のみを表示 */}
          <div className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed text-center px-6 py-10 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            {getTargetSentence().split(' ______ ').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i !== arr.length - 1 && (
                  <span className="text-orange-500 border-b-4 border-orange-500 px-2 mx-1">
                    {isCorrect ? currentAnswer : '__________'}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {!isCorrect && (
            <div className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                className="w-full px-6 py-5 bg-slate-100 border-4 border-transparent focus:border-orange-400 focus:bg-white rounded-2xl outline-none text-2xl font-black transition-all text-center"
                autoFocus
                placeholder="..."
              />
              <button
                onClick={checkAnswer}
                disabled={!userInput.trim()}
                className="w-full py-5 bg-slate-800 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-slate-900 active:scale-95 transition-all disabled:opacity-50"
              >
                Check Answer
              </button>
            </div>
          )}

          {isCorrect === false && (
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 bg-red-50 text-red-600 font-bold rounded-2xl flex items-center gap-2">
                <AlertCircle size={20} />
                <span>Try again!</span>
              </div>
              <button onClick={() => setShowHint(!showHint)} className="text-xs text-slate-400 underline italic">
                {showHint ? 'Hide hint' : 'Need a hint?'}
              </button>
              {showHint && (
                <div className="text-slate-400 font-mono tracking-[0.3em] mt-2">
                  {currentAnswer.charAt(0)}...{currentAnswer.charAt(currentAnswer.length - 1)}
                </div>
              )}
            </div>
          )}

          {isCorrect && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-6 bg-emerald-50 rounded-[24px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={50} className="text-emerald-500 mb-2" />
                <span className="text-emerald-700 font-black text-2xl">Well Done!</span>
              </div>
              <button
                onClick={handleNext}
                className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>{currentIndex < items.length - 1 ? 'Next Question' : 'Complete Step'}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
