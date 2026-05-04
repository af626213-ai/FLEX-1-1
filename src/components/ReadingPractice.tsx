import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RotateCcw, Plus, Minus, Volume2 } from 'lucide-react';

interface ReadingPracticeProps {
  script: string;
  onNext: (accuracy: number, wpm: number) => void;
}

export const ReadingPractice = ({ script, onNext }: ReadingPracticeProps) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenWords, setSpokenWords] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState({ accuracy: 0, wpm: 0 });
  // デフォルトサイズを最小の 16px に設定
  const [fontSize, setFontSize] = useState(16); 
  const [isModelPlaying, setIsModelPlaying] = useState(false);
  const recognitionRef = useRef<any>(null);

  const targetWords = script.replace(/[.,!?"“”]/g, "").toLowerCase().split(/\s+/);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join(" ")
          .toLowerCase();
        
        const spoken = transcript.split(/\s+/);
        setSpokenWords(spoken);

        const correctCount = targetWords.filter(w => transcript.includes(w)).length;
        const acc = Math.round((correctCount / targetWords.length) * 100);
        
        if (startTime && isListening) {
          const duration = (Date.now() - startTime) / 1000 / 60;
          const currentWpm = Math.round(spoken.length / duration);
          setResults({ accuracy: acc, wpm: currentWpm });
        } else if (!isListening) {
          setResults(prev => ({ ...prev, accuracy: acc }));
        }
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [startTime, targetWords, isListening]);

  const handlePlayModel = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isModelPlaying) {
        setIsModelPlaying(false);
        return;
      }
      const u = new SpeechSynthesisUtterance(script);
      u.lang = 'en-US';
      u.rate = 1.0; 
      u.onend = () => setIsModelPlaying(false);
      window.speechSynthesis.speak(u);
      setIsModelPlaying(true);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      
      if (startTime) {
        const endTime = Date.now();
        const durationMinutes = (endTime - startTime) / 1000 / 60;
        const finalWpm = Math.round(spokenWords.length / durationMinutes);
        setResults(prev => ({ ...prev, wpm: finalWpm }));
      }
    } else {
      window.speechSynthesis.cancel();
      setIsModelPlaying(false);
      setSpokenWords([]);
      setResults({ accuracy: 0, wpm: 0 });
      setStartTime(Date.now());
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleRetry = () => {
    setSpokenWords([]);
    setResults({ accuracy: 0, wpm: 0 });
    setStartTime(null);
    window.speechSynthesis.cancel();
    setIsModelPlaying(false);
    if (isListening) recognitionRef.current?.stop();
    setIsListening(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop px-2">
      <div className="flex gap-4 justify-center">
        <div className="bg-cyan-500 text-white p-4 rounded-2xl shadow-lg w-32 text-center">
          <p className="text-[10px] font-black uppercase tracking-wider">Accuracy</p>
          <p className="text-3xl font-black">{results.accuracy}%</p>
        </div>
        <div className="bg-rose-500 text-white p-4 rounded-2xl shadow-lg w-32 text-center">
          <p className="text-[10px] font-black uppercase tracking-wider">WPM</p>
          <p className="text-3xl font-black">{results.wpm}</p>
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-6 shadow-xl border-4 border-slate-100 text-left">
        <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
          <div className="flex items-center gap-3">
            <p className="text-xs font-black text-cyan-500 uppercase tracking-widest">Target Text</p>
            <button 
              onClick={handlePlayModel}
              className={`p-2 rounded-full transition-all ${isModelPlaying ? 'bg-orange-500 text-white animate-pulse' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'}`}
            >
              <Volume2 size={18} />
            </button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setFontSize(s => Math.max(12, s - 2))} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200"><Minus size={16} /></button>
            <button onClick={() => setFontSize(s => Math.min(48, s + 2))} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200"><Plus size={16} /></button>
          </div>
        </div>
        
        <div 
          className="leading-relaxed font-bold break-words" 
          style={{ fontSize: `${fontSize}px` }}
        >
          {script.split(/\s+/).map((word, i) => {
            const cleanWord = word.replace(/[.,!?"“”]/g, "").toLowerCase();
            const isMatch = spokenWords.includes(cleanWord);
            return (
              <span key={i} className={`${isMatch ? 'text-cyan-500' : 'text-slate-800'} transition-colors duration-300 mr-2`}>
                {word}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={toggleListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${isListening ? 'bg-rose-500 animate-pulse' : 'bg-cyan-500'}`}
        >
          {isListening ? <Square className="text-white" size={32} /> : <Mic className="text-white" size={32} />}
        </button>
        <p className="text-slate-400 font-bold">{isListening ? "Listening..." : "Tap to Start Reading"}</p>
        
        <div className="flex gap-4 w-full pt-4">
          <button onClick={handleRetry} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl flex items-center justify-center gap-2">
            <RotateCcw size={20} /> RETRY
          </button>
          <button 
            onClick={() => onNext(results.accuracy, results.wpm)}
            className="flex-[2] py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg hover:bg-orange-600"
          >
            成績提出 (GO NEXT)
          </button>
        </div>
      </div>
    </div>
  );
};
