import React, { useState, useEffect, useRef } from 'react';
import { Mic, CheckCircle, AlertCircle, Volume2, Play, ChevronRight } from 'lucide-react';

interface DictationItem {
  id: number;
  question: string;
  answer: string;
}

interface DictationStepProps {
  script: string;
  items: DictationItem[];
  rate: number; // App.tsxから速度を受け取る
  onNext: () => void;
}

export const DictationStep: React.FC<DictationStepProps> = ({ script, items, rate, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentItem = items[currentIndex];

  // 音声読み上げ関数（Appからの速度を適用）
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate; // ここでAppの速度を適用！
      window.speechSynthesis.speak(u);
    }
  };

  useEffect(() => {
    // ステップ開始時や問題切り替え時に音声を流す
    speak(currentItem.answer);
  }, [currentIndex]);

  const checkAnswer = () => {
    const cleanUser = userInput.toLowerCase().trim().replace(/[.,!?]/g, '');
    const cleanAnswer = currentItem.answer.toLowerCase().trim().replace(/[.,!?]/g, '');

    if (cleanUser === cleanAnswer) {
      setIsCorrect(true);
      const audio = new Audio('/correct.mp3');
      audio.volume = 0.4;
      audio.play().catch(() => {});
      speak(currentItem.answer); // 正解時にもう一度流す
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
        <p className="text-slate-500 font-bold tracking-wider text-sm">
          Listen and type the missing phrase.
        </p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8">
        <div className="flex justify-center">
          <button
            onClick={() => speak(currentItem.answer)}
            className="flex items-center gap-3 px-8 py-4 bg-orange-100 text-orange-600 rounded-2xl font-black hover:bg-orange-200 transition-all active:scale-95 shadow-sm"
          >
            <Volume2 size={24} />
            <span>Listen Again</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="text-2xl font-bold text-slate-700 leading-relaxed text-center px-4 py-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            {currentItem.question.split('______').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i !== arr.length - 1 && (
                  <span className="text-orange-500 border-b-4 border-orange-500 px-2 mx-1">
                    {isCorrect ? currentItem.answer : '__________'}
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
                placeholder="Type the answer here..."
                className="w-full px-6 py-5 bg-slate-100 border-4 border-transparent focus:border-orange-400 focus:bg-white rounded-2xl outline-none text-xl font-bold transition-all text-center"
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
            <div className="p-4 bg-red-50 rounded-2xl flex items-center gap-3 text-red-600 font-bold animate-bounce">
              <AlertCircle size={20} />
              <span>Try again!</span>
              <button 
                onClick={() => setShowHint(!showHint)} 
                className="ml-auto text-xs underline"
              >
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            </div>
          )}
          
          {showHint && !isCorrect && (
            <div className="text-center text-slate-400 font-mono tracking-widest text-sm">
              Hint: {currentItem.answer.charAt(0)}...{currentItem.answer.charAt(currentItem.answer.length-1)}
            </div>
          )}

          {isCorrect && (
            <div className="space-y-6 animate-in zoom-in duration-300">
              <div className="p-6 bg-emerald-50 rounded-[24px] border-4 border-emerald-100 flex flex-col items-center gap-2">
                <CheckCircle size={48} className="text-emerald-500" />
                <span className="text-emerald-700 font-black text-xl">Perfect!</span>
                <p className="text-slate-600 font-bold">{currentItem.answer}</p>
              </div>
              <button
                onClick={handleNext}
                className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>{currentIndex < items.length - 1 ? 'Next Question' : 'Finish Dictation'}</span>
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
