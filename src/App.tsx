import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, Zap } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
import { VocabularyStep } from './components/VocabularyStep';
import { DictationStep } from './components/DictationStep';
import { ReadingStep } from './components/ReadingStep';
import { courseData, Episode, KeyPhrase } from './data/episodes';

// 音声を強制停止するユーティリティ
const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
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
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-orange-100 min-h-[250px] flex flex-col justify-center text-center space-y-6 relative text-left">
        <button onClick={() => handleSpeak(currentItem.phrase)} className="absolute top-4 right-4 p-3 bg-orange-50 text-orange-600 rounded-full hover:bg-orange-100 transition-all">
          <Volume2 size={20} />
        </button>
        <h3 className="text-4xl font-black text-orange-600 tracking-tight text-center">{currentItem.phrase}</h3>
        <p className="text-xl text-slate-700 leading-relaxed font-bold">{currentItem.explanation}</p>
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
        <h2 className="text-3xl font-black text-slate-800">Step 6: Overlapping</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4">
          <p className="text-sm md:text-base font-bold text-orange-700 leading-relaxed">英語の音声を聴きながら、その音声にピッタリ重ねてスクリプトを同時に音読しよう！</p>
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 relative">
        <button onClick={handlePlay} className="absolute top-4 right-4 w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-all">
          {isPlaying ? <Square size={24} /> : <Volume2 size={24} />}
        </button>
        <p className="text-2xl text-slate-800 leading-relaxed pr-20 font-bold">{script}</p>
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
        <h2 className="text-3xl font-black text-slate-800">Step 7: Shadowing</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4 max-w-2xl mx-auto">
          <p className="text-sm md:text-base font-bold text-orange-700 leading-relaxed">英語の音声をすぐ後ろから影（shadow）のように追いかけて音読しよう！</p>
        </div>
      </div>
      <div className="bg-white rounded-[32px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-6">
        <button onClick={handlePlay} className="w-28 h-28 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md transform active:scale-95 transition-all">
          {isPlaying ? <Square size={40} /> : <Volume2 size={40} />}
        </button>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Complete Episode</button>
    </div>
  );
};

// --- メインコンポーネント ---
export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'vocabulary' | 'phrases' | 'dictation' | 'reading' | 'overlapping' | 'shadowing' | 'result'>('menu');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0); // 速度管理
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
      const finishAudio = new Audio('/finish.mp3'); finishAudio.volume = 0.5; finishAudio.play().catch(() => {});
    }
  }, [currentStep]);

  const toggleBgm = () => { 
    if (!bgmRef.current) return; 
    isBgmPlaying ? bgmRef.current.pause() : bgmRef.current.play().catch(() => {}); 
    setIsBgmPlaying(!isBgmPlaying); 
  };

  const renderLessonSection = (lessonNum: number, startId: number, endId: number) => (
    <section className="space-y-6 text-left">
      <div className="flex items-center gap-4 px-2">
        <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
          <span className="bg-orange-500 text-white px-4 py-1.5 rounded-xl shadow-sm whitespace-nowrap">Lesson {lessonNum}</span>
        </h3>
        <div className="h-1 bg-slate-200 flex-1 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseData.episodes.filter(ep => ep.id >= startId && ep.id <= endId).map((ep, idx) => (
          <div key={ep.id} onClick={() => { stopSpeech(); setSelectedEpisode(ep); setCurrentStep('listening'); }} className="group relative bg-white rounded-[32px] p-6 border-4 border-slate-100 hover:border-orange-400 cursor-pointer transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
            <div className="absolute -right-4 -bottom-6 text-9xl font-black text-slate-50 group-hover:text-orange-50 transition-colors pointer-events-none">{idx + 1}</div>
            <div className="relative z-10 flex items-center gap-5 text-left">
              <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">P{idx + 1}</div>
              <div className="flex-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-widest mb-1">Part {idx + 1}</p>
                <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight group-hover:text-orange-600 transition-colors">{ep.title}</h3>
              </div>
              <Play className="text-slate-300 group-hover:text-orange-500" size={20} fill="currentColor" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => { stopSpeech(); setCurrentStep('menu'); }} className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"><Home size={22} /></button>
        <button onClick={toggleBgm} className={`px-4 py-2 rounded-xl border-2 font-bold text-sm ${isBgmPlaying ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-600 border-slate-200'}`}>{isBgmPlaying ? 'BGM ON' : 'BGM OFF'}</button>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'vocabulary', 'phrases', 'dictation', 'reading', 'overlapping', 'shadowing'] as const).map((step) => (
            <button key={step} onClick={() => { stopSpeech(); setCurrentStep(step); }} className={`py-3 px-4 text-[9px] font-black uppercase tracking-widest border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step}</button>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6 text-center">
        <div className="max-w-4xl mx-auto">
          {currentStep === 'menu' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="text-center py-16 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200/20 rounded-full -translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-300/10 rounded-full translate-x-20 translate-y-20" />
                <h1 className="text-sm font-black text-orange-400 uppercase tracking-[0.5em] mb-4 relative z-10">The Ultimate Learning Method</h1>
                <h2 className="text-6xl md:text-7xl font-black text-orange-700 leading-none tracking-tighter relative z-10">English<br /><span className="text-orange-500">Navigator</span></h2>
                
                {/* 速度調整ボタン（0.9 / 1.0 / 1.1 に変更） */}
                <div className="mt-8 relative z-10 flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest">
                    <Zap size={14} className="text-orange-400" />
                    Speed Control
                  </div>
                  <div className="bg-white p-1.5 rounded-2xl shadow-md border-2 border-orange-100 flex gap-1">
                    {[0.9, 1.0, 1.1].map((rate) => (
                      <button
                        key={rate}
                        onClick={() => setSpeechRate(rate)}
                        className={`px-6 py-2 rounded-xl font-black text-sm transition-all ${speechRate === rate ? 'bg-orange-500 text-white shadow-inner' : 'text-slate-400 hover:bg-orange-50'}`}
                      >
                        {rate.toFixed(1)}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-16">
                {renderLessonSection(1, 1, 4)}
                {renderLessonSection(2, 5, 8)}
              </div>
              <p className="text-center text-slate-400 font-bold text-sm pb-10">Master English through Listening, Reading, and Speaking.</p>
            </div>
          )}

          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('quiz'); }} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => { stopSpeech(); setCurrentStep('vocabulary'); }} />}
          {currentStep === 'vocabulary' && <VocabularyStep questions={selectedEpisode.vocab_quizzes} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('phrases'); }} />}
          {currentStep === 'phrases' && <KeyPhrasesInternal items={selectedEpisode.key_phrases} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('dictation'); }} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} onNext={() => { stopSpeech(); setCurrentStep('reading'); }} />}
          {currentStep === 'reading' && <ReadingStep slashScript={selectedEpisode.slash_script || selectedEpisode.script} japanese={selectedEpisode.japanese_translation || ""} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('overlapping'); }} />}
          {currentStep === 'overlapping' && <OverlappingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('shadowing'); }} />}
          {currentStep === 'shadowing' && <ShadowingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => { stopSpeech(); setCurrentStep('result'); }} />}
          
          {currentStep === 'result' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-12 animate-in zoom-in duration-500">
              <CheckCircle size={80} className="text-green-500 mx-auto" />
              <h2 className="text-4xl font-black text-slate-800">Lesson Cleared!</h2>
              <button onClick={() => setCurrentStep('menu')} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-700 transition-all">Back to Story List</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
