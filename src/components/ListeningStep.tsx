import React, { useState } from 'react';
import { Volume2, Square } from 'lucide-react';

interface ListeningStepProps { script: string; onNext: () => void; }

export const ListeningStep: React.FC<ListeningStepProps> = ({ script, onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; u.rate = 0.9; u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); }
    }
  };
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop text-center">
      <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md"><Volume2 size={32} /></div>
      <h2 className="text-3xl font-black text-slate-800">Step 1: Listening</h2>
      <div className="bg-white rounded-[32px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-6">
        <button onClick={handlePlay} className="w-28 h-28 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all shadow-md transform active:scale-95">{isPlaying ? <Square size={40} /> : <Volume2 size={40} />}</button>
        <p className="text-slate-400 font-black uppercase tracking-widest">{isPlaying ? "Playing..." : "Click to start audio"}</p>
      </div>
      <button onClick={() => { window.speechSynthesis.cancel(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-2xl rounded-2xl shadow-lg hover:bg-orange-700 transition-all">Next Step</button>
    </div>
  );
};
