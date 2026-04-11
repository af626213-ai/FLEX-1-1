import React, { useState } from 'react';
import { Volume2, Square, Mic } from 'lucide-react';

interface OverlappingStepProps {
  script: string;
  tips?: string;
  onNext: () => void;
}

export const OverlappingStep: React.FC<OverlappingStepProps> = ({ script, tips, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'en-US';
        utterance.rate = 0.85; // Slightly slower for overlapping
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Step 5: Overlapping</h2>
        <p className="text-slate-500">Read the script aloud simultaneously with the audio.</p>
      </div>

      <div className="w-full space-y-6">
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
          <Mic className="text-amber-600 shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-amber-800 mb-1">Tips for Overlapping</h3>
            <p className="text-amber-900 text-sm leading-relaxed">{tips || "Listen to the audio and read along."}</p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
          <button 
            onClick={handlePlay}
            className="absolute top-4 right-4 p-3 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors"
            aria-label={isPlaying ? "Stop" : "Play"}
          >
            {isPlaying ? <Square size={20} /> : <Volume2 size={20} />}
          </button>
          <p className="text-lg text-slate-700 leading-relaxed pr-12 whitespace-pre-wrap">{script}</p>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={onNext}
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};
