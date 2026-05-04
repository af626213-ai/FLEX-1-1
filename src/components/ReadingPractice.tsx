import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, RotateCcw, Plus, Minus, Volume2 } from 'lucide-react';

interface ReadingPracticeProps {
  script: string;
  onNext: (accuracy: number, wpm: number) => void;
}

export const ReadingPractice = ({ script, onNext }: ReadingPracticeProps) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenTranscript, setSpokenTranscript] = useState(""); // 発話全体を文字列で持つ
  const [displayWords, setDisplayWords] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState({ accuracy: 0, wpm: 0 });
  
  const [targetFontSize, setTargetFontSize] = useState(12);
  const [voiceFontSize, setVoiceFontSize] = useState(12);
  
  const [isModelPlaying, setIsModelPlaying] = useState(false);
  const recognitionRef = useRef<any>(null);

  // お手本の単語リスト（判定用）
  const targetWords = script.replace(/[.,!?"“”()]/g, "").toLowerCase().split(/\s+/).filter(w => w.length > 0);

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
        
        setSpokenTranscript(transcript);

        // --- 以前の「確実に動く」判定ロジックを復元 ---
        // お手本の単語が、自分の発話全体の中に含まれているかを数える
        const correctCount = targetWords.filter(w => transcript.includes(w)).length;
        const acc = targetWords.length > 0 ? Math.round((correctCount / targetWords.length) * 100) : 0;
        
        if (startTime && isListening) {
          const duration = (Date.now() - startTime) / 1000 / 60;
          // 語数は発話された単語数で計算
          const spokenWordCount = transcript.split(/\s+/).filter(w => w.length > 0).length;
          const currentWpm = duration > 0 ? Math.round(spokenWordCount / duration) : 0;
          
          setResults({ accuracy: acc, wpm: currentWpm });
        }
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [startTime, targetWords, isListening]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      // 停止した瞬間に、今の発話テキストを下段にバラして表示
      setDisplayWords(spokenTranscript.split(/\s+/).filter(w => w.length > 0));
    } else {
      window.speechSynthesis.cancel();
      setIsModelPlaying(false);
      setSpokenTranscript("");
      setDisplayWords([]);
      setResults({ accuracy: 0, wpm: 0 });
      setStartTime(Date.now());
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleRetry = () => {
    setSpokenTranscript("");
    setDisplayWords([]);
    setResults({ accuracy: 0, wpm: 0 });
    setStartTime(null);
    window.speechSynthesis.cancel();
    setIsModelPlaying(false);
    if (isListening) recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handlePlayModel = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isModelPlaying) { setIsModelPlaying(false); return; }
      const u = new SpeechSynthesisUtterance(script);
      u.lang = 'en-US'; u.rate = 1.0; 
      u.onend = () => setIsModelPlaying(false);
      window.speechSynthesis.speak(u);
      setIsModelPlaying(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-in fade-in duration-500 font-pop px-2 pb-10">
      <div className="flex gap-4 justify-center">
        <div className="bg-cyan-500 text-white p-3 rounded-xl shadow-lg w-28 text-center border-b-4 border-cyan-700">
          <p className="text-[10px] font-black uppercase tracking-widest">Accuracy</p>
          <p className="text-2xl font-black">{results.accuracy}%</p>
        </div>
        <div className="bg-rose-500 text-white p-3 rounded-xl shadow-lg w-28 text-center border-b-4 border-rose-700">
          <p className="text-[10px] font-black uppercase tracking-widest">WPM</p>
          <p className="text-2xl font-black">{results.wpm}</p>
        </div>
      </div>

      {/* お手本枠 */}
      <div className="bg-white rounded-3xl p-5 shadow-md border-2 border-slate-100 text-left relative">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-black text-cyan-500 uppercase">Target Text (お手本)</p>
            <button onClick={handlePlayModel} className={`p-1.5 rounded-full ${isModelPlaying ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-500'}`}>
              <Volume2 size={14} />
            </button>
          </div>
          <div className="flex gap-1">
            <button onClick={() => setTargetFontSize(s => Math.max(10, s - 2))} className="p-1.5 bg-slate-50 rounded text-slate-400"><Minus size={12} /></button>
            <button onClick={() => setTargetFontSize(s => Math.min(48, s + 2))} className="p-1.5 bg-slate-50 rounded text-slate-400"><Plus size={12} /></button>
          </div>
        </div>
        <div className="font-bold text-slate-800 break-words leading-relaxed" style={{ fontSize: `${targetFontSize}px` }}>
          {script}
        </div>
      </div>

      {/* あなたの発音枠 */}
      <div className="bg-rose-50/50 rounded-3xl p-5 shadow-md border-2 border-rose-100 text-left min-h-[120px] relative">
        <div className="flex justify-between items-center mb-2">
          <p className="text-[10px] font-black text-rose-500 uppercase">Your Voice (あなたの発音)</p>
          <div className="flex gap-1">
            <button onClick={() => setVoiceFontSize(s => Math.max(10, s - 2))} className="p-1.5 bg-white rounded text-rose-300"><Minus size={12} /></button>
            <button onClick={() => setVoiceFontSize(s => Math.min(48, s + 2))} className="p-1.5 bg-white rounded text-rose-300"><Plus size={12} /></button>
          </div>
        </div>
        <div className="font-bold break-words leading-relaxed" style={{ fontSize: `${voiceFontSize}px` }}>
          {displayWords.length > 0 ? (
            displayWords.map((word, i) => {
              const cleanWord = word.replace(/[.,!?"“”()]/g, "").toLowerCase();
              // ここも「発話全体に含まれるか」ベースの判定に合わせる
              const isMatch = targetWords.includes(cleanWord);
              return (
                <span key={i} className={`${isMatch ? 'text-cyan-500' : 'text-slate-400'} mr-1.5`}>
                  {word}
                </span>
              );
            })
          ) : (
            <span className="text-rose-200 italic text-sm">Waiting for voice input...</span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 pt-2">
        <button onClick={toggleListening} className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all active:scale-95 ${isListening ? 'bg-rose-500 animate-pulse' : 'bg-cyan-500'}`}>
          {isListening ? <Square className="text-white" size={28} /> : <Mic className="text-white" size={28} />}
        </button>
        <div className="flex gap-3 w-full max-sm:max-w-xs">
          <button onClick={handleRetry} className="flex-1 py-3 bg-white border-2 border-slate-200 text-slate-500 font-black rounded-xl text-sm flex items-center justify-center gap-2">
            <RotateCcw size={16} /> RETRY
          </button>
          <button onClick={() => onNext(results.accuracy, results.wpm)} className="flex-[2] py-3 bg-rose-500 text-white font-black rounded-xl text-sm shadow-lg border-b-4 border-rose-700 active:border-b-0 active:translate-y-1 transition-all">
            成績提出 (GO NEXT)
          </button>
        </div>
      </div>
    </div>
  );
};
