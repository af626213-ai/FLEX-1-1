import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, Zap, ChevronDown } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
import { VocabularyStep } from './components/VocabularyStep';
import { DictationStep } from './components/DictationStep';
import { ReadingStep } from './components/ReadingStep';
import { ReadingPractice } from './components/ReadingPractice';

import { courseData } from './data/episodes';
import type { Episode, KeyPhrase } from './data/episodes';

const stopSpeech = () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// --- インライン・キーフレーズ ---
const KeyPhrasesInternal = ({ items, rate, onNext }: { items: KeyPhrase[], rate: number, onNext: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
  
  const handleSpeak = (text: string) => {
    stopSpeech();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  };

  const handleNext = () => { 
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      stopSpeech();
      onNext();
    }
  };
  if (!currentItem) return null;
  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><BookOpen size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Key Phrases</h2>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-orange-100 min-h-[250px] flex flex-col justify-center text-center space-y-6 relative">
        <button onClick={() => handleSpeak(currentItem.phrase)} className="absolute top-4 right-4 p-3 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-all">
          <Volume2 size={20} />
        </button>
        <h3 className="text-4xl font-black text-orange-600 tracking-tight text-center">{currentItem.phrase}</h3>
        <p className="text-xl text-slate-700 leading-relaxed font-bold text-left">{currentItem.explanation}</p>
      </div>
      <div className="flex gap-4">
        <button onClick={() => currentIndex > 0 && setCurrentIndex(c => c - 1)} disabled={currentIndex === 0} className={`flex-1 py-4 rounded-2xl font-bold ${currentIndex === 0 ? 'bg-slate-100 text-slate-300' : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-orange-300'}`}>Back</button>
        <button onClick={handleNext} className="flex-[2] py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">{currentIndex < items.length - 1 ? 'Next Phrase' : 'Start Dictation'}</button>
      </div>
    </div>
  );
};

// --- インライン・オーバーラッピング ---
const OverlappingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { 
        stopSpeech();
        const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; 
        u.rate = rate; 
        u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
      }
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 7: Overlapping</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4 text-center text-orange-700 font-bold">
          音声にピッタリ重ねてスクリプトを同時に音読しよう！
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 relative">
        <button onClick={handlePlay} className="absolute top-4 right-4 w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-all">
          {isPlaying ? <Square size={24} /> : <Volume2 size={24} />}
        </button>
        <p className="text-2xl text-slate-800 leading-relaxed pr-20 font-bold text-left">{script}</p>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Go to Shadowing</button>
    </div>
  );
};

// --- インライン・シャドーイング ---
const ShadowingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { 
        stopSpeech();
        const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; 
        u.rate = rate; 
        u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
      }
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop text-center">
      <div className="space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><Headphones size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 8: Shadowing</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4 text-center text-orange-700 font-bold">
          音声をすぐ後ろから影のように追いかけて音読しよう！
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-6">
        <button onClick={handlePlay} className="w-28 h-28 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md transform active:scale-95 transition-all">
          {isPlaying ? <Square size={40} /> : <Volume2 size={40} />}
        </button>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Go to Reading Practice</button>
    </div>
  );
};

// --- メインコンポーネント ---
export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'vocabulary' | 'phrases' | 'dictation' | 'reading' | 'overlapping' | 'shadowing' | 'practice' | 'result'>('menu');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0); 
  const [finalScores, setFinalScores] = useState({ acc: 0, wpm: 0 });
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const style = document.createElement('style');
    style.textContent = `.font-pop { font-family: 'Kiwi Maru', sans-serif !important; } body { background-color: #f8fafc; }`;
    document.head.appendChild(style);
    const audio = new Audio('/bgm.mp3'); audio.loop = true; audio.volume = 0.15; bgmRef.current = audio;
    return () => { audio.pause(); stopSpeech(); };
  }, []);

  useEffect(() => {
    if (currentStep === 'result') {
      const f = new Audio('/finish.mp3'); f.volume = 0.5; f.play().catch(() => {});
    }
  }, [currentStep]);

  const toggleBgm = () => { 
    if (!bgmRef.current) return; 
    isBgmPlaying ? bgmRef.current.pause() : bgmRef.current.play().catch(() => {}); 
    setIsBgmPlaying(!isBgmPlaying); 
  };

  const handleStart = (ep: Episode) => {
    stopSpeech();
    setSelectedEpisode(ep);
    setCurrentStep('listening');
  };

  const renderMainMenu = () => {
    const startId = (selectedLesson - 1) * 3 + 1;
    const endId = startId + 2;
    const filteredEpisodes = courseData.episodes.filter(ep => ep.id >= startId && ep.id <= endId);

    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="text-center py-12 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner relative overflow-hidden">
          <h2 className="text-5xl md:text-6xl font-black text-orange-700 leading-none tracking-tighter relative z-10">
            English<br /><span className="text-orange-500">Navigator</span>
          </h2>
          <div className="mt-8 flex flex-col items-center gap-2 relative z-10 px-6">
            <label className="text-xs font-black text-orange-400 uppercase tracking-widest">Select Your Lesson</label>
            <div className="relative w-full max-w-xs">
              <select 
                value={selectedLesson} 
                onChange={(e) => setSelectedLesson(Number(e.target.value))}
                className="w-full p-4 bg-white border-4 border-orange-100 rounded-3xl font-black text-slate-700 appearance-none focus:border-orange-400 outline-none shadow-lg cursor-pointer"
              >
                <option value={1}>Lesson 1: How Can We Become Stronger?</option>
                <option value={2}>Lesson 2: The Jar of Life</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none" size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep, idx) => (
            <div 
              key={ep.id} 
              onClick={() => handleStart(ep)} 
              className="group bg-white rounded-[32px] p-8 border-4 border-slate-100 hover:border-orange-400 cursor-pointer transition-all shadow-sm hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-lg group-hover:scale-110 transition-transform">
                P{idx + 1}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-widest">Part {idx + 1}</p>
                <h3 className="text-lg font-black text-slate-800 leading-tight group-hover:text-orange-600 transition-colors">
                  {ep.title}
                </h3>
              </div>
              <div className="mt-2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <Play className="text-slate-300 group-hover:text-orange-500 translate-x-0.5" size={18} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => { stopSpeech(); setCurrentStep('menu'); }} className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"><Home size={22} /></button>
        <button onClick={toggleBgm} className={`px-4 py-2 rounded-xl border-2 font-bold text-sm ${isBgmPlaying ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-600 border-slate-200'}`}>{isBgmPlaying ? 'BGM ON' : 'BGM OFF'}</button>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'vocabulary', 'phrases', 'dictation', 'reading', 'overlapping', 'shadowing', 'practice'] as const).map((step) => (
            <button key={step} onClick={() => { stopSpeech(); setCurrentStep(step); }} className={`py-3 px-4 text-[9px] font-black uppercase tracking-widest border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step}</button>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6 text-center">
        <div className="max-w-5xl mx-auto">
          {currentStep === 'menu' && renderMainMenu()}
          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('quiz')} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => setCurrentStep('vocabulary')} />}
          {currentStep === 'vocabulary' && <VocabularyStep questions={selectedEpisode.vocab_quizzes} rate={speechRate} onNext={() => setCurrentStep('phrases')} />}
          {currentStep === 'phrases' && <KeyPhrasesInternal items={selectedEpisode.key_phrases} rate={speechRate} onNext={() => setCurrentStep('dictation')} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} rate={speechRate} onNext={() => setCurrentStep('reading')} />}
          {currentStep === 'reading' && <ReadingStep slashScript={selectedEpisode.slash_script || selectedEpisode.script} japanese={selectedEpisode.japanese_translation || ""} rate={speechRate} onNext={() => setCurrentStep('overlapping')} />}
          {currentStep === 'overlapping' && <OverlappingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('shadowing')} />}
          {currentStep === 'shadowing' && <ShadowingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('practice')} />}
          
          {currentStep === 'practice' && (
            <ReadingPractice 
              script={selectedEpisode.script} 
              onNext={(acc, wpm) => {
                setFinalScores({ acc, wpm });
                setCurrentStep('result');
              }} 
            />
          )}

          {currentStep === 'result' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-12 animate-in zoom-in duration-500">
              <CheckCircle size={80} className="text-green-500 mx-auto" />
              <h2 className="text-4xl font-black text-slate-800">Step Cleared!</h2>
              <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-orange-100 flex justify-around">
                <div><p className="text-xs text-slate-400">Accuracy</p><p className="text-2xl font-black text-cyan-600">{finalScores.acc}%</p></div>
                <div><p className="text-xs text-slate-400">WPM</p><p className="text-2xl font-black text-rose-600">{finalScores.wpm}</p></div>
              </div>
              <button onClick={() => setCurrentStep('menu')} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-700 transition-all">Back to Story List</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
