import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RotateCcw, Plus, Minus } from 'lucide-react';

interface ReadingPracticeProps {
  script: string;
  onNext: (accuracy: number, wpm: number) => void;
}

export const ReadingPractice = ({ script, onNext }: ReadingPracticeProps) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenWords, setSpokenWords] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState({ accuracy: 0, wpm: 0 });
  const [fontSize, setFontSize] = useState(24);
  const recognitionRef = useRef<any>(null);

  // お手本の単語リスト（記号を除去して小文字化）
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

        // 正解単語のカウント
        const correctCount = targetWords.filter(w => transcript.includes(w)).length;
        const acc = Math.round((correctCount / targetWords.length) * 100);
        
        let wpm = 0;
        if (startTime) {
          const duration = (Date.now() - startTime) / 1000 / 60;
          // 1分間あたりの発音単語数を計算
          wpm = Math.round(spoken.length / duration);
        }
        setResults({ accuracy: acc, wpm: wpm });
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [startTime, targetWords]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      setSpokenWords([]);
      setStartTime(Date.now());
      setResults({ accuracy: 0, wpm: 0 });
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleRetry = () => {
    setSpokenWords([]);
    setResults({ accuracy: 0, wpm: 0 });
    setStartTime(null);
    if (isListening) recognitionRef.current?.stop();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop px-2">
      {/* スコア表示パネル */}
      <div className="flex gap-4 justify-center">
        <div className="bg-cyan-500 text-white p-4 rounded-2xl shadow-lg w-32">
          <p className="text-[10px] font-black uppercase tracking-wider">Accuracy</p>
          <p className="text-3xl font-black">{results.accuracy}%</p>
        </div>
        <div className="bg-rose-500 text-white p-4 rounded-2xl shadow-lg w-32">
          <p className="text-[10px] font-black uppercase tracking-wider">WPM</p>
          <p className="text-3xl font-black">{results.wpm}</p>
        </div>
      </div>

      {/* お手本テキスト表示 */}
      <div className="bg-white rounded-[32px] p-6 shadow-xl border-4 border-slate-100 text-left">
        <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
          <p className="text-xs font-black text-cyan-500 uppercase tracking-widest">Target Text (お手本)</p>
          <div className="flex gap-2">
            <button onClick={() => setFontSize(s => Math.max(16, s - 2))} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200"><Minus size={16} /></button>
            <button onClick={() => setFontSize(s => Math.min(48, s + 2))} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-slate-200"><Plus size={16} /></button>
          </div>
        </div>
        
        <div 
          className="leading-relaxed font-bold text-slate-800 break-words" 
          style={{ fontSize: `${fontSize}px` }}
        >
          {script.split(/\s+/).map((word, i) => {
            const cleanWord = word.replace(/[.,!?"“”]/g, "").toLowerCase();
            const isMatch = spokenWords.includes(cleanWord);
            return (
              <span key={i} className={`${isMatch ? 'text-cyan-500' : 'text-slate-300'} transition-colors duration-300 mr-2`}>
                {word}
              </span>
            );
          })}
        </div>
      </div>

      {/* 操作エリア */}
      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={toggleListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${isListening ? 'bg-rose-500 animate-pulse' : 'bg-cyan-500'}`}
        >
          {isListening ? <Square className="text-white" size={32} /> : <Mic className="text-white" size={32} />}
        </button>
        <p className="text-slate-400 font-bold">{isListening ? "Listening... (音読してください)" : "Tap to Start Reading"}</p>
        
        <div className="flex gap-4 w-full pt-4">
          <button onClick={handleRetry} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
            <RotateCcw size={20} /> RETRY
          </button>
          <button 
            onClick={() => onNext(results.accuracy, results.wpm)}
            className="flex-[2] py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg hover:bg-orange-600 transition-colors"
          >
            成績提出 (GO NEXT)
          </button>
        </div>
      </div>
    </div>
  );
};
