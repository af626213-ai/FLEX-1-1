import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, BookOpenCheck } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
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
const KeyPhrasesInternal = ({ items, onNext }: { items: KeyPhrase[], onNext: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
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
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-orange-100 min-h-[250px] flex flex-col justify-center text-center space-y-6">
        <h3 className="text-4xl font-black text-orange-600 tracking-tight">{currentItem.phrase}</h3>
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
const OverlappingInternal = ({ script, tips, onNext }: { script: string, tips?: string, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { 
        stopSpeech();
        const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; u.rate = 0.85; u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
      }
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 6: Overlapping</h2>
      </div>
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 relative">
        <button onClick={handlePlay} className="absolute top-4 right-4 w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-all">{isPlaying ? <Square size={24} /> : <Volume2 size={24} />}</button>
        <p className="text-2xl text-slate-800 leading-relaxed pr-20 font-bold">{script}</p>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Go to Shadowing</button>
    </div>
  );
};

// --- インライン・シャドーイング ---
const ShadowingInternal = ({ script, tips, onNext }: { script: string, tips?: string, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) { window.speechSynthesis.cancel(); setIsPlaying(false); }
      else { 
        stopSpeech();
        const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; u.rate = 0.9; u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true); 
      }
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop text-center">
      <div className="space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white mb-2 shadow-md">
          <Headphones size={32} />
        </div>
        <h2 className="text-3xl font-black text-slate-800">Step 7: Shadowing</h2>
      </div>
      <div className="bg-white rounded-[32px] p-10 shadow-xl border-4 border-slate-100 flex flex-col items-center gap-6">
        <button onClick={handlePlay} className="w-28 h-28 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 shadow-md transform active:scale-95">{isPlaying ? <Square size={40} /> : <Volume2 size={40} />}</button>
      </div>
      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Complete Episode</button>
    </div>
  );
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'phrases' | 'dictation' | 'reading' | 'overlapping' | 'shadowing' | 'result'>('menu');
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      .font-pop { font-family: 'Kiwi Maru', sans-serif !important; }
      body { background-color: #f8fafc; }
    `;
    document.head.appendChild(style);

    const audio = new Audio('/bgm.mp3'); audio.loop = true; audio.volume = 0.15; bgmRef.current = audio;
    return () => { audio.pause(); stopSpeech(); };
  }, []);

  // エピソード完了時の効果音
  useEffect(() => {
    if (currentStep === 'result') {
      const finishAudio = new Audio('/finish.mp3');
      finishAudio.volume = 0.5;
      finishAudio.play().catch(() => {});
    }
  }, [currentStep]);

  const toggleBgm = () => { if (!bgmRef.current) return; isBgmPlaying ? bgmRef.current.pause() : bgmRef.current.play().catch(() => {}); setIsBgmPlaying(!isBgmPlaying); };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button onClick={() => { stopSpeech(); setCurrentStep('menu'); }} className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"><Home size={22} /></button>
        <button onClick={toggleBgm} className={`px-4 py-2 rounded-xl border-2 font-bold text-sm ${isBgmPlaying ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-slate-600 border-slate-200'}`}>{isBgmPlaying ? 'BGM ON' : 'BGM OFF'}</button>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'phrases', 'dictation', 'reading', 'overlapping', 'shadowing'] as const).map((step) => (
            <button key={step} onClick={() => { stopSpeech(); setCurrentStep(step); }} className={`py-3 px-6 text-[10px] font-black uppercase tracking-widest border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step}</button>
          ))}
        </nav>
      )}

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {currentStep === 'menu' && (
            <div className="space-y-6 animate-in fade-in duration-700">
              <div className="text-center py-10 bg-orange-50 rounded-[40px] border-4 border-orange-100 shadow-inner">
                <h1 className="text-sm font-black text-orange-400 uppercase tracking-[0.3em] mb-2">English Learning Story</h1>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-black text-orange-600">Lesson 1</p>
                  <h2 className="text-4xl md:text-5xl font-black text-orange-700 leading-tight">
                    {courseData.course_title}
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseData.episodes.map((ep) => (
                  <div key={ep.id} onClick={() => { stopSpeech(); setSelectedEpisode(ep); setCurrentStep('listening'); }} className="bg-white rounded-[24px] p-5 border-4 border-transparent hover:border-orange-400 cursor-pointer flex items-center justify-between group shadow-sm hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black">{ep.id}</div>
                      <div><h3 className="text-lg font-bold group-hover:text-orange-600">{ep.title}</h3><p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Episode {ep.id}</p></div>
                    </div>
                    <Play className="text-slate-300 group-hover:text-orange-600" size={20} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} onNext={() => { stopSpeech(); setCurrentStep('quiz'); }} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => { stopSpeech(); setCurrentStep('phrases'); }} />}
          {currentStep === 'phrases' && <KeyPhrasesInternal items={selectedEpisode.key_phrases} onNext={() => { stopSpeech(); setCurrentStep('dictation'); }} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} onNext={() => { stopSpeech(); setCurrentStep('reading'); }} />}
          {currentStep === 'reading' && (
            <ReadingStep 
              slashScript={selectedEpisode.slash_script || selectedEpisode.script} 
              japanese={selectedEpisode.japanese_translation || "No translation available."} 
              onNext={() => { stopSpeech(); setCurrentStep('overlapping'); }} 
            />
          )}
          {currentStep === 'overlapping' && <OverlappingInternal script={selectedEpisode.script} tips={selectedEpisode.overlappingTips} onNext={() => { stopSpeech(); setCurrentStep('shadowing'); }} />}
          {currentStep === 'shadowing' && <ShadowingInternal script={selectedEpisode.script} tips={selectedEpisode.shadowingTips} onNext={() => { stopSpeech(); setCurrentStep('result'); }} />}
          
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
