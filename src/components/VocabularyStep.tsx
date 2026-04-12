import React, { useState, useEffect } from 'react';
import { BookOpen, ArrowRight, Volume2 } from 'lucide-react';

interface VocabQuestion {
  word: string;
  meaning: string;
  options: string[];
}

interface VocabularyStepProps {
  questions: VocabQuestion[];
  rate: number; // 追加
  onNext: () => void;
}

export const VocabularyStep: React.FC<VocabularyStepProps> = ({ questions, rate, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const currentQuestion = questions[currentIndex];

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate; // 速度を適用
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    speakWord(currentQuestion.word);
  }, [currentIndex]);

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

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(option);
    if (option === currentQuestion.meaning) {
      const audio = new Audio('/correct.mp3');
      audio.volume = 0.4;
      audio.play().catch(() => {});
      fireConfetti();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
    } else {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <BookOpen size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Vocabulary Check</h2>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="text-5xl font-black text-slate-800 tracking-tight">{currentQuestion.word}</div>
          <button 
            onClick={() => speakWord(currentQuestion.word)}
            className="p-3 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-all active:scale-90"
          >
            <Volume2 size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.options.map((option) => {
            const isRight = option === currentQuestion.meaning;
            let bgColor = "bg-slate-50 border-slate-200 hover:border-orange-300";
            if (selectedOption !== null) {
              if (isRight) bgColor = "bg-emerald-500 border-emerald-500 text-white";
              else if (selectedOption === option) bgColor = "bg-red-500 border-red-500 text-white";
              else bgColor = "bg-slate-50 border-slate-100 opacity-50";
            }
            return (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`py-5 px-6 rounded-2xl border-4 font-bold text-xl transition-all ${bgColor}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedOption !== null && (
          <button
            onClick={handleNext}
            className="w-full py-5 bg-orange-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-orange-600 flex items-center justify-center gap-3"
          >
            <span>{currentIndex < questions.length - 1 ? 'Next Word' : 'Finish Vocab Check'}</span>
            <ArrowRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};
