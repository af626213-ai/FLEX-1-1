import React, { useState, useEffect } from 'react';
import { Volume2, Square, ChevronRight, Headphones } from 'lucide-react';

interface ListeningStepProps {
  script: string;
  rate: number; // 追加
  onNext: () => void;
}

export const ListeningStep: React.FC<ListeningStepProps> = ({ script, rate, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'en-US';
        utterance.rate = rate; // Appから受け取った速度を適用
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <Headphones size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 1: Listening</h2>
        <p className="text-slate-500 font-bold tracking-wider text-sm md:text-base">
          Listen to the English story carefully.
        </p>
      </div>

      <div className="bg-white rounded-[40px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-8">
        <button
          onClick={handlePlay}
          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all shadow-lg active:scale-95 ${
            isPlaying ? 'bg-slate-800 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}
        >
          {isPlaying ? <Square size={48} /> : <Volume2 size={48} />}
        </button>
      </div>

      <button
        onClick={() => {
          if ('speechSynthesis' in window) window.speechSynthesis.cancel();
          onNext();
        }}
        className="w-full py-5 bg-orange-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
      >
        <span>Next Step: Comprehension Quiz</span>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
