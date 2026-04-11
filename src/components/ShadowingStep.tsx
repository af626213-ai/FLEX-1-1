import React, { useState } from 'react';
import { Volume2, Square, Headphones } from 'lucide-react';

interface ShadowingStepProps {
  script: string;
  tips?: string;
  onNext: () => void;
}

export const ShadowingStep: React.FC<ShadowingStepProps> = ({ script, tips, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);

  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Step 6: Shadowing</h2>
        <p className="text-slate-500">Listen to the audio and repeat immediately after, without looking at the script.</p>
      </div>

      <div className="w-full space-y-6">
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex gap-3">
          <Headphones className="text-emerald-600 shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-emerald-800 mb-1">Tips for Shadowing</h3>
            <p className="text-emerald-900 text-sm leading-relaxed">{tips || "Listen to the audio and repeat immediately after."}</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12 bg-slate-50 rounded-xl border border-slate-200">
          <button 
            onClick={handlePlay}
            className="p-6 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 mb-4"
            aria-label={isPlaying ? "Stop" : "Play"}
          >
            {isPlaying ? <Square size={32} /> : <Volume2 size={32} />}
          </button>
          <p className="text-slate-500 font-medium">
            {isPlaying ? "Playing audio..." : "Click to start audio"}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 pt-4">
          <button
            onClick={() => setShowScript(!showScript)}
            className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors"
          >
            {showScript ? "Hide Script" : "Show Script (if you really need it)"}
          </button>
          
          {showScript && (
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-600 text-sm leading-relaxed w-full">
              {script}
            </div>
          )}

          <button
            onClick={onNext}
            className="mt-4 px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm w-full sm:w-auto"
          >
            Complete Episode
          </button>
        </div>
      </div>
    </div>
  );
};
