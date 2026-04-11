import React, { useState, useEffect } from 'react';
import { BookOpenCheck, ChevronRight, Volume2, Square } from 'lucide-react';

interface ReadingStepProps {
  slashScript: string;
  japanese: string;
  onNext: () => void;
}

export const ReadingStep: React.FC<ReadingStepProps> = ({ slashScript, japanese, onNext }) => {
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
        const cleanScript = slashScript.replace(/\//g, '');
        const utterance = new SpeechSynthesisUtterance(cleanScript);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <BookOpenCheck size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 5: Reading</h2>
        <p className="text-base text-slate-500 font-bold">Read and understand the structure.</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 space-y-10 relative">
        <div className="flex justify-end pr-2">
          <button
            onClick={handlePlay}
            className="p-4 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-all flex items-center gap-2 group"
          >
            {isPlaying ? <Square size={24} /> : <Volume2 size={24} />}
            <span className="font-bold pr-1">Listen</span>
          </button>
        </div>

        {/* 英語：スラッシュ表示 */}
        <div className="space-y-4">
          <span className="px-4 py-1 bg-orange-500 text-white text-xs font-black rounded-full uppercase tracking-widest">English</span>
          <p className="text-2xl md:text-3xl font-black text-slate-800 leading-relaxed tracking-tight">
            {slashScript.split('/').map((part, i, arr) => (
              <React.Fragment key={i}>
                <span className="hover:text-orange-500 transition-colors">{part.trim()}</span>
                {i !== arr.length - 1 && <span className="text-orange-300 mx-2 font-light">/</span>}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="h-px bg-slate-100" />

        {/* 日本語訳：スラッシュ表示に対応 */}
        <div className="space-y-4">
          <span className="px-4 py-1 bg-slate-200 text-slate-600 text-xs font-black rounded-full uppercase tracking-widest">Translation</span>
          <p className="text-xl md:text-2xl font-bold text-slate-600 leading-relaxed">
            {japanese.split('/').map((part, i, arr) => (
              <React.Fragment key={i}>
                <span className="hover:text-slate-900 transition-colors">{part.trim()}</span>
                {i !== arr.length - 1 && <span className="text-slate-300 mx-2 font-light">/</span>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>

      <button
        onClick={() => {
          if ('speechSynthesis' in window) window.speechSynthesis.cancel();
          onNext();
        }}
        className="w-full py-5 bg-orange-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-3"
      >
        <span>Next Step: Overlapping</span>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
