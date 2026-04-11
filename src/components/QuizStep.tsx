import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, HelpCircle } from 'lucide-react';
import { QuizQuestion } from '../data/episodes';

interface QuizStepProps {
  quizzes: QuizQuestion[];
  onNext: () => void;
}

export const QuizStep: React.FC<QuizStepProps> = ({ quizzes, onNext }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuiz = quizzes[currentQuizIndex];

  // クラッカーを飛ばす関数（ライブラリ不要版）
  const fireConfetti = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.onload = () => {
      (window as any).confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f97316', '#fbbf24', '#ffffff']
      });
    };
    document.head.appendChild(script);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;
    
    const correct = option === currentQuiz.ans;
    setSelectedOption(option);
    setIsCorrect(correct);
    
    if (correct) {
      // Publicの音声を再生
      const audio = new Audio('/correct.mp3');
      audio.play().catch(() => {});
      // クラッカー実行
      fireConfetti();
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <HelpCircle size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 2: Quiz</h2>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8">
        <p className="text-2xl font-bold text-slate-800 text-center">{currentQuiz.q}</p>
        <div className="grid grid-cols-1 gap-4">
          {currentQuiz.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
              className={`w-full p-6 text-left text-lg font-bold rounded-2xl border-2 transition-all flex items-center justify-between 
                ${selectedOption === null ? 'bg-white text-slate-700 border-slate-200 hover:border-orange-500 hover:bg-orange-50' : 
                  option === currentQuiz.ans ? 'bg-emerald-50 text-emerald-700 border-emerald-500 shadow-inner' : 
                  option === selectedOption ? 'bg-red-50 text-red-700 border-red-500 shadow-inner' : 'bg-slate-50 text-slate-400 border-slate-200'}`}
            >
              {option}
              {selectedOption !== null && option === currentQuiz.ans && <CheckCircle2 className="text-emerald-500" size={24} />}
              {selectedOption !== null && option === selectedOption && !isCorrect && <XCircle className="text-red-500" size={24} />}
            </button>
          ))}
        </div>
      </div>

      {selectedOption !== null && (
        <div className="bg-white rounded-[24px] p-6 shadow-lg border-2 border-slate-100 animate-in slide-in-from-bottom-4 space-y-4 text-center">
          <div className={`text-xl font-black ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
            {isCorrect ? '✨ PERFECT! ✨' : '❌ TRY AGAIN'}
          </div>
          <p className="text-slate-600 font-bold leading-relaxed">{currentQuiz.explanation}</p>
          <button
            onClick={handleNext}
            className="w-full py-4 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {currentQuizIndex < quizzes.length - 1 ? 'Next Question' : 'Finish Quiz'}
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
};
