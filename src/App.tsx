import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, Zap, ChevronDown, RotateCcw } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
import { VocabularyStep } from './components/VocabularyStep';
import { DictationStep } from './components/DictationStep';
import { ReadingStep } from './components/ReadingStep';

import { courseData } from './data/episodes';
import type { Episode, KeyPhrase } from './data/episodes';

const stopSpeech = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// --- 音読・発音判定コンポーネント ---
const ReadingPracticeStep = ({ script, onNext }: { script: string, onNext: (acc: number, wpm: number) => void }) => {
  const [isListening, setIsListening] = useState(false);
  const [spokenWords, setSpokenWords] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [results, setResults] = useState({ accuracy: 0, wpm: 0 });
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

        // スコア計算
        const correctCount = targetWords.filter(w => transcript.includes(w)).length;
        const acc = Math.round((correctCount / targetWords.length) * 100);
        
        let wpm = 0;
        if (startTime) {
          const duration = (Date.now() - startTime) / 1000 / 60;
          wpm = Math.round(spoken.length / duration);
        }
        setResults({ accuracy: acc, wpm: wpm });
      };

      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, [startTime]);

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

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      {/* スコア表示パネル */}
      <div className="flex gap-4 justify-center">
        <div className="bg-cyan-500 text-white p-4 rounded-2xl shadow-lg w-32">
          <p className="text-[10px] font-black uppercase">Accuracy</p>
          <p className="text-3xl font-black">{results.accuracy}%</p>
        </div>
        <div className="bg-rose-500 text-white p-4 rounded-2xl shadow-lg w-32">
          <p className="text-[10px] font-black uppercase">WPM</p>
          <p className="text-3xl font-black">{results.wpm}</p>
        </div>
      </div>

      {/* お手本テキスト表示 */}
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 text-left">
        <p className="text-xs font-black text-cyan-500 mb-4 uppercase tracking-widest">Target Text (お手本)</p>
        <div className="text-2xl leading-relaxed font-bold text-slate-800">
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

      {/* コントロールボタン */}
      <div className="flex flex-col items-center gap-4">
        <button 
          onClick={toggleListening}
          className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${isListening ? 'bg-rose-500 animate-pulse' : 'bg-cyan-500'}`}
        >
          {isListening ? <Square className="text-white" size={32} /> : <Mic className="text-white" size={32} />}
        </button>
        <p className="text-slate-400 font-bold">{isListening ? "Listening... (話してください)" : "Tap to Start Reading"}</p>
        
        <div className="flex gap-4 w-full">
          <button onClick={() => setSpokenWords([])} className="flex-1 py-4 bg-slate-100 text-slate-600 font-black rounded-2xl flex items-center justify-center gap-2">
            <RotateCcw size={20} /> RETRY
          </button>
          <button 
            onClick={() => onNext(results.accuracy, results.wpm)}
            className="flex-[2] py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg"
          >
            成績提出 (GO NEXT)
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 既存のインラインコンポーネント ---
const KeyPhrasesInternal = ({ items, rate, onNext }: { items: KeyPhrase[], rate: number, onNext: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
  const handleSpeak = (text: string) => {
    stopSpeech();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate;
    window.speechSynthesis.speak(u);
  };
  const handleNext = () => { 
    if (currentIndex < items.length - 1) setCurrentIndex(prev => prev + 1);
    else { stopSpeech(); onNext(); }
  };
  if (!currentItem) return null;
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><BookOpen size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Key Phrases</h2>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-orange-100 min-h-[250px] flex flex-col justify-center text-center space-y-6 relative">
        <button onClick={() => handleSpeak(currentItem.phrase)} className="absolute top-4 right-4 p-3 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-all"><Volume2 size={20} /></button>
        <h3 className="text-4xl font-black text-orange-600 tracking-tight">{currentItem.phrase}</h3>
        <p className="text-xl text-slate-700 leading-relaxed font-bold text-left">{currentItem.explanation}</p>
      </div>
      <button onClick={handleNext} className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg">
        {currentIndex < items.length - 1 ? 'Next Phrase' : 'Start Dictation'}
      </button>
    </div>
  );
};

// --- メインコンポーネント ---
export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'vocabulary' | 'phrases' | 'dictation' | 'reading' | 'practice' | 'overlapping' | 'shadowing' | 'result'>('menu');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [speechRate, setSpeechRate] = useState<number>(1.0); 
  const [finalScores, setFinalScores] = useState({ acc: 0, wpm: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500;900&display=swap';
    link.rel = 'stylesheet'; document.head.appendChild(link);
    const style = document.createElement('style');
    style.textContent = `.font-pop { font-family: 'Kiwi Maru', sans-serif !important; } body { background-color: #f8fafc; }`;
    document.head.appendChild(style);
  }, []);

  const handleStart = (ep: Episode) => {
    stopSpeech();
    setSelectedEpisode(ep);
    setCurrentStep('listening');
  };

  const renderMainMenu = () => {
    const startId = (selectedLesson - 1) * 3 + 1;
    const filteredEpisodes = courseData.episodes.filter(ep => ep.id >= startId && ep.id <= startId + 2);

    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="text-center py-12 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner">
          <h2 className="text-5xl md:text-6xl font-black text-orange-700 leading-none tracking-tighter">English<br /><span className="text-orange-500">Navigator</span></h2>
          <div className="mt-8 flex flex-col items-center gap-2 px-6">
            <select 
              value={selectedLesson} 
              onChange={(e) => setSelectedLesson(Number(e.target.value))}
              className="w-full max-w-xs p-4 bg-white border-4 border-orange-100 rounded-3xl font-black text-slate-700 appearance-none focus:border-orange-400 outline-none shadow-lg"
            >
              <option value={1}>Lesson 1: Matsuoka Shuzo</option>
              <option value={2}>Lesson 2: The Jar of Life</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep, idx) => (
            <div key={idx} onClick={() => handleStart(ep)} className="group bg-white rounded-[32px] p-8 border-4 border-slate-100 hover:border-orange-400 cursor-pointer transition-all shadow-sm hover:shadow-2xl relative flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-lg">P{idx + 1}</div>
              <h3 className="text-lg font-black text-slate-800 leading-tight group-hover:text-orange-600">{ep.title}</h3>
              <Play className="text-slate-300 group-hover:text-orange-500" size={24} fill="currentColor" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => setCurrentStep('menu')} className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"><Home size={22} /></button>
        <div className="flex gap-1">
          {[0.6, 0.8, 1.0, 1.1].map(r => (
            <button key={r} onClick={() => setSpeechRate(r)} className={`px-3 py-1 rounded-lg text-xs font-black ${speechRate === r ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{r}x</button>
          ))}
        </div>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'vocabulary', 'phrases', 'dictation', 'reading', 'practice', 'overlapping', 'shadowing'] as const).map((step) => (
            <button key={step} onClick={() => setCurrentStep(step)} className={`py-3 px-4 text-[9px] font-black uppercase border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step}</button>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {currentStep === 'menu' && renderMainMenu()}
          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('quiz')} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => setCurrentStep('vocabulary')} />}
          {currentStep === 'vocabulary' && <VocabularyStep questions={selectedEpisode.vocab_quizzes} rate={speechRate} onNext={() => setCurrentStep('phrases')} />}
          {currentStep === 'phrases' && <KeyPhrasesInternal items={selectedEpisode.key_phrases} rate={speechRate} onNext={() => setCurrentStep('dictation')} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} rate={speechRate} onNext={() => setCurrentStep('reading')} />}
          {currentStep === 'reading' && <ReadingStep slashScript={selectedEpisode.slash_script || selectedEpisode.script} japanese={selectedEpisode.japanese_translation || ""} rate={speechRate} onNext={() => setCurrentStep('practice')} />}
          
          {/* 追加：発音練習ステップ */}
          {currentStep === 'practice' && (
            <ReadingPracticeStep 
              script={selectedEpisode.script} 
              onNext={(acc, wpm) => {
                setFinalScores({ acc, wpm });
                setCurrentStep('overlapping');
              }} 
            />
          )}

          {currentStep === 'overlapping' && <ReadingStep slashScript={selectedEpisode.script} japanese="Listen and repeat at the same time!" rate={speechRate} onNext={() => setCurrentStep('shadowing')} />}
          {currentStep === 'shadowing' && <ReadingStep slashScript={selectedEpisode.script} japanese="Shadow the voice!" rate={speechRate} onNext={() => setCurrentStep('result')} />}
          
          {currentStep === 'result' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-12 animate-in zoom-in">
              <CheckCircle size={80} className="text-green-500 mx-auto" />
              <h2 className="text-4xl font-black text-slate-800">Perfect!</h2>
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-orange-100 flex justify-around">
                <div><p className="text-xs text-slate-400">Final Accuracy</p><p className="text-2xl font-black text-cyan-600">{finalScores.acc}%</p></div>
                <div><p className="text-xs text-slate-400">Final WPM</p><p className="text-2xl font-black text-rose-600">{finalScores.wpm}</p></div>
              </div>
              <button onClick={() => setCurrentStep('menu')} className="w-full py-5 bg-orange-500 text-white font-black text-xl rounded-2xl shadow-lg">Back to Menu</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
