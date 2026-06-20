import React, { useState, useEffect, useRef } from 'react';
import { Home, Play, CheckCircle, BookOpen, Volume2, Square, Mic, Headphones, ChevronDown, X, Share, Send, Loader2, Link, ClipboardCheck } from 'lucide-react';
import { ListeningStep } from './components/ListeningStep';
import { QuizStep } from './components/QuizStep';
import { VocabularyStep } from './components/VocabularyStep';
import { DictationStep } from './components/DictationStep';
import { ReadingStep } from './components/ReadingStep';
import { ReadingPractice } from './components/ReadingPractice';

import { courseData } from './data/episodes';
import type { Episode, KeyPhrase } from './data/episodes';

const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      console.error("Speech cancellation skipped:", e);
    }
  }
};

// --- ホーム画面追加を促すポップアップ ---
const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isStandalone = (window as any).navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
      const timer = setTimeout(() => setShowPrompt(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-x-4 bottom-10 z-[100] animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white rounded-[24px] p-6 shadow-2xl border-4 border-slate-100 flex items-start gap-4 relative">
        <button onClick={() => setShowPrompt(false)} className="absolute top-4 right-4 text-slate-300 hover:text-slate-500 transition-colors">
          <X size={24} />
        </button>
        <img src="/apple-touch-icon.PNG" alt="App Icon" className="w-16 h-16 rounded-2xl shadow-md border border-slate-50" />
        <div className="flex-1 pr-6">
          <h3 className="text-lg font-black text-slate-800 mb-1">ホーム画面に追加</h3>
          <p className="text-sm text-slate-500 font-bold leading-snug">
            全画面で快適にプレイできます。下部の
            <span className="inline-block mx-1 p-1 bg-slate-100 rounded text-cyan-600 align-middle">
              <Share size={14} className="inline" />
            </span>
            をタップし、「ホーム画面に追加」を選択してください。
          </p>
        </div>
      </div>
    </div>
  );
};

// --- インライン・オーバーラッピング（音声イベント完全同期版） ---
const OverlappingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const handlePlay = () => {
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
      setHighlightIndex(0);
    } else {
      stopSpeech();
      const u = new SpeechSynthesisUtterance(script);
      u.lang = 'en-US';
      u.rate = rate;

      u.onboundary = (event) => {
        if (event.name === 'word') {
          setHighlightIndex(event.charIndex);
        }
      };

      u.onend = () => { setIsPlaying(false); setHighlightIndex(0); };
      u.onerror = () => { setIsPlaying(false); setHighlightIndex(0); };

      window.speechSynthesis.speak(u);
      setIsPlaying(true);
    }
  };

  useEffect(() => { return () => stopSpeech(); }, []);

  const renderHighlightedScript = () => {
    if (!isPlaying || highlightIndex === 0) {
      return <span className="text-slate-800">{script}</span>;
    }

    const remainingText = script.substring(highlightIndex);
    const nextSpaceIndex = remainingText.search(/\s/);
    
    const breakPoint = nextSpaceIndex !== -1 
      ? highlightIndex + nextSpaceIndex 
      : script.length;

    const spoken = script.substring(0, breakPoint);
    const remaining = script.substring(breakPoint);

    return (
      <>
        <span className="text-sky-600 transition-colors duration-700">{spoken}</span>
        <span className="text-slate-800">{remaining}</span>
      </>
    );
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop">
      <div className="text-center space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md"><Mic size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 7: Overlapping</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4 text-center text-orange-700 font-bold">
          音声にピッタリ重ねてスクリプトを同時に音読しよう！
        </div>
      </div>
      
      <div className="bg-white rounded-[32px] p-8 shadow-xl border-4 border-slate-100 relative overflow-hidden">
        <button onClick={handlePlay} className="absolute top-4 right-4 z-10 w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-all shadow-sm">
          {isPlaying ? <Square size={24} /> : <Volume2 size={24} />}
        </button>
        <p className="text-2xl font-bold text-left leading-relaxed pr-20 whitespace-pre-wrap">
          {renderHighlightedScript()}
        </p>
      </div>

      <button onClick={() => { stopSpeech(); onNext(); }} className="w-full py-5 bg-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all">Go to Shadowing</button>
    </div>
  );
};

// --- インライン・シャドーイング ---
const ShadowingInternal = ({ script, rate, onNext }: { script: string, rate: number, onNext: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (isPlaying) { stopSpeech(); setIsPlaying(false); }
    else {
      stopSpeech();
      const u = new SpeechSynthesisUtterance(script); u.lang = 'en-US'; u.rate = rate;
      u.onend = () => setIsPlaying(false); window.speechSynthesis.speak(u); setIsPlaying(true);
    }
  };
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 font-pop text-center">
      <div className="space-y-2">
        <div className="inline-block p-3 bg-orange-500 rounded-2xl text-white shadow-md"><Headphones size={32} /></div>
        <h2 className="text-3xl font-black text-slate-800">Step 8: Shadowing</h2>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 mt-4 text-center text-orange-700 font-bold">音声をすぐ後ろから影のように追いかけて音読しよう！</div>
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

export default function App() {
  const [currentStep, setCurrentStep] = useState<'menu' | 'listening' | 'quiz' | 'vocabulary' | 'dictation' | 'reading' | 'overlapping' | 'shadowing' | 'practice' | 'result'>('menu');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>(courseData.episodes[0]);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [finalScores, setFinalScores] = useState({ acc: 0, wpm: 0 });

  const [studentInfo, setStudentInfo] = useState({ grade: '', classNum: '', attendNum: '', name: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // 🔗 先生用：各先生独自の回収GoogleフォームのベースIDを記憶（デフォルトは深澤先生のID）
  const [formBaseUrl, setFormBaseUrl] = useState<string>(() => localStorage.getItem('flex_teacher_form_id') || '1FAIpQLSc-VFKZhqhx3q-lpkclvNEoKf2VxZb3leSkIJOnQ6r0iTBirg');
  
  // 🎓 生徒用：配布用URL（パラメーター）経由で入ってきたかどうかの判定フラグ
  const [isExamStudentView, setIsExamStudentView] = useState<boolean>(false);
  const [examLessonId, setExamLessonId] = useState<number>(1);
  const [examPartNum, setExamPartNum] = useState<number>(1);

  useEffect(() => {
    const link = document.createElement('link'); link.href = 'https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500;900&display=swap'; link.rel = 'stylesheet'; document.head.appendChild(link);
    const style = document.createElement('style'); style.textContent = `.font-pop { font-family: 'Kiwi Maru', sans-serif !important; } body { background-color: #f8fafc; }`; document.head.appendChild(style);
  }, []);

  // 🔗 URLパラメーター読み込み（生徒配布用リンク時の自動フック）
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const examLesson = params.get('examLesson');
    const examPart = params.get('examPart');
    const targetFormId = params.get('formId');

    if (examLesson && examPart && targetFormId) {
      const lesNum = Number(examLesson);
      const partNum = Number(examPart);
      
      setExamLessonId(lesNum);
      setExamPartNum(partNum);
      setFormBaseUrl(targetFormId);
      setIsExamStudentView(true);

      const targetEpisodeId = (lesNum - 1) * 3 + partNum;
      const foundEp = courseData.episodes.find(ep => ep.id === targetEpisodeId);
      if (foundEp) {
        setSelectedEpisode(foundEp);
      }
      setCurrentStep('practice');
    }
  }, []);

  useEffect(() => { localStorage.setItem('flex_teacher_form_id', formBaseUrl); }, [formBaseUrl]);

  useEffect(() => {
    if (currentStep === 'result') {
      const finishAudio = new Audio('/finish.mp3'); finishAudio.volume = 0.5; finishAudio.play().catch(() => {});
      setIsSent(false);
    }
  }, [currentStep]);

  const sanitizeNumber = (val: string) => {
    const halfWidth = val.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
    return halfWidth.replace(/[^0-9]/g, '');
  };

  // 📋 ✨ お送りいただいた音読回収専用フォームのテンプレート自動複製処理
  const handleCopyFormTemplateScript = () => {
    const targetUrl = "https://docs.google.com/forms/d/1ROGNVF3VpWXUHmuPYrp3tMI8XE4F3C54SE7YkTOESQw/copy";
    window.open(targetUrl, '_blank');
  };

  const handleCopyExamUrl = (lessonNum: number, partNum: number) => {
    if (!formBaseUrl.trim()) {
      alert("先に提出先のGoogleフォームID、またはURLを登録してください。"); return;
    }
    let extractedId = formBaseUrl.trim();
    if (formBaseUrl.includes("forms/d/")) {
      const matches = formBaseUrl.match(/forms\/d\/e\/([^/]+)/) || formBaseUrl.match(/forms\/d\/([^/]+)/);
      if (matches && matches[1]) extractedId = matches[1];
    }

    const finalUrl = `${window.location.origin}${window.location.pathname}?examLesson=${lessonNum}&examPart=${partNum}&formId=${extractedId}`;
    navigator.clipboard.writeText(finalUrl);
    alert(`🔗 Lesson ${lessonNum} Part ${partNum} の「テスト専用配布用URL」をコピーしました！これを生徒に配ってください。`);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentInfo.grade || !studentInfo.classNum || !studentInfo.attendNum || !studentInfo.name) {
      alert('すべての項目を入力してください。'); return;
    }
    setIsSending(true);

    let cleanFormId = formBaseUrl.trim();
    if (cleanFormId.includes("forms/d/")) {
      const matches = cleanFormId.match(/forms\/d\/e\/([^/]+)/) || cleanFormId.match(/forms\/d\/([^/]+)/);
      if (matches && matches[1]) cleanFormId = matches[1];
    }

    const formUrl = `https://docs.google.com/forms/d/e/${cleanFormId}/formResponse`;
    const lesNum = isExamStudentView ? examLessonId : selectedLesson;
    const partNum = isExamStudentView ? examPartNum : ((selectedEpisode.id - 1) % 3) + 1;

    const formData = new FormData();
    formData.append('entry.1623079129', studentInfo.grade);
    formData.append('entry.1605514074', studentInfo.classNum);
    formData.append('entry.1194830885', studentInfo.attendNum);
    formData.append('entry.522541386', studentInfo.name);
    formData.append('entry.2065434801', finalScores.acc.toString());
    formData.append('entry.1759461570', finalScores.wpm.toString());
    formData.append('entry.738533923', lesNum.toString()); 
    formData.append('entry.773089114', partNum.toString());        

    try {
      await fetch(formUrl, { method: 'POST', body: formData, mode: 'no-cors' });
      setIsSent(true);
    } catch (error) {
      alert('送信に失敗しました。Wi-Fi環境を確認してください。');
    } finally {
      setIsSending(false);
    }
  };

  const handleStart = (ep: Episode) => { stopSpeech(); setSelectedEpisode(ep); setCurrentStep('listening'); };

  const renderMainMenu = () => {
    const startId = (selectedLesson - 1) * 3 + 1;
    const filteredEpisodes = courseData.episodes.filter((ep) => ep.id >= startId && ep.id <= startId + 2);
    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* 🛠️ 先生用：成績回収フォーム設定＆テスト配布用コントロールパネル */}
        <div className="bg-white border-2 border-orange-200 rounded-[32px] p-6 shadow-md text-left space-y-4 max-w-xl mx-auto">
          <div className="text-sm font-black text-orange-700 border-b pb-2 flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-orange-500" />
            <span>🛠️ 先生用：音読テスト配布コントロールパネル</span>
          </div>
          
          <div className="space-y-1">
            <button type="button" onClick={handleCopyFormTemplateScript} className="w-full py-2.5 bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-700 font-bold text-xs rounded-xl flex items-center justify-center text-center transition-colors cursor-pointer">
              📋 新しい回収フォームのテンプレートを自分のドライブにコピーする
            </button>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-black text-slate-400 block uppercase tracking-wider">作成した独自のGoogleフォームURL、またはフォームID</label>
            <input 
              type="text" 
              value={formBaseUrl} 
              onChange={(e) => setFormBaseUrl(e.target.value)} 
              placeholder="https://docs.google.com/forms/d/e/.../viewform" 
              className="w-full bg-slate-50 text-xs p-3 rounded-xl border-2 border-slate-100 font-mono shadow-inner outline-none focus:border-orange-400 transition-colors" 
            />
          </div>

          <div className="pt-2 border-t border-dashed border-slate-200">
            <p className="text-[11px] font-bold text-slate-500 leading-snug mb-2">
              💡 下のレッスン一覧の各カードから、特定のパートを指定して生徒へ配布する「テスト専用URL」をいつでも即座にコピーできます。
            </p>
          </div>
        </div>

        <div className="text-center py-12 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner relative overflow-hidden">
          <h2 className="text-5xl md:text-6xl font-black text-orange-700 leading-none tracking-tighter relative z-10">English<br /><span className="text-orange-500">Navigator</span></h2>
          <div className="mt-8 flex flex-col items-center gap-2 relative z-10 px-6">
            <label className="text-xs font-black text-orange-400 uppercase tracking-widest">Select Your Lesson</label>
            <div className="relative w-full max-w-xs">
              <select value={selectedLesson} onChange={(e) => setSelectedLesson(Number(e.target.value))} className="w-full p-4 bg-white border-4 border-orange-100 rounded-3xl font-black text-slate-700 appearance-none focus:border-orange-400 outline-none shadow-lg cursor-pointer">
                <option value={1}>Lesson 1: Matsuoka Shuzo</option>
                <option value={2}>Lesson 2: The Jar of Life</option>
                <option value={3}>Lesson 3: A Future Energy Crisis</option>
                <option value={4}>Lesson 4: Mary Anning</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-orange-400 pointer-events-none" size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep, idx) => (
            <div key={ep.id} className="group bg-white rounded-[32px] p-8 border-4 border-slate-100 shadow-sm relative overflow-hidden flex flex-col items-center text-center gap-4 hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-2xl shadow-lg">P{idx + 1}</div>
              <div className="space-y-1">
                <p className="text-xs font-black text-orange-400 uppercase tracking-widest">Part {idx + 1}</p>
                <h3 className="text-lg font-black text-slate-800 leading-tight">{ep.title}</h3>
              </div>
              
              <button onClick={() => handleStart(ep)} className="mt-2 w-full py-2.5 bg-orange-50 hover:bg-orange-500 hover:text-white text-orange-600 font-bold text-xs rounded-xl flex items-center justify-center gap-1 transition-all active:scale-95">
                <Play size={14} fill="currentColor" /> フルステップ学習
              </button>

              <button onClick={() => handleCopyExamUrl(selectedLesson, idx + 1)} className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 font-black text-[10px] rounded-xl flex items-center justify-center gap-1 transition-all">
                <Link size={12} /> 配布用テストURLをコピー
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-pop">
      <PWAInstallPrompt />
      
      <header className="bg-white sticky top-0 z-50 border-b-4 border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <button 
          onClick={() => { 
            if (isExamStudentView) {
              if (confirm("テストモードを終了してメインメニューに戻りますか？(現在のスコアは破棄されます)")) {
                window.location.search = ""; 
              }
            } else {
              stopSpeech(); setCurrentStep('menu'); 
            }
          }} 
          className="p-2 bg-slate-100 hover:bg-orange-100 rounded-xl text-slate-800"
        >
          <Home size={22} />
        </button>
        <div className="flex gap-1">
          {[0.6, 0.8, 1.0, 1.1].map((r) => (
            <button key={r} onClick={() => setSpeechRate(r)} className={`px-3 py-1 rounded-lg text-xs font-black ${speechRate === r ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{r}x</button>
          ))}
        </div>
      </header>

      {currentStep !== 'menu' && currentStep !== 'result' && !isExamStudentView && (
        <nav className="bg-white border-b-2 border-slate-100 flex justify-center overflow-x-auto px-4">
          {(['listening', 'quiz', 'vocabulary', 'dictation', 'reading', 'overlapping', 'shadowing', 'practice'] as const).map((step) => (
            <button key={step} onClick={() => { stopSpeech(); setCurrentStep(step); }} className={`py-3 px-4 text-[9px] font-black uppercase tracking-widest border-b-4 ${currentStep === step ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-400'}`}>{step === 'practice' ? 'Practice' : step}</button>
          ))}
        </nav>
      )}

      {isExamStudentView && currentStep === 'practice' && (
        <div className="bg-orange-50 border-b-2 border-orange-200 py-3 px-6 text-center text-xs font-black text-orange-800 animate-in slide-in-from-top duration-300">
          📝 【音読実力判定テスト】 Lesson {examLessonId} : Part {examPartNum} を配信中（スコアは自動提出されます）
        </div>
      )}

      <main className="flex-1 p-6 text-center">
        <div className="max-w-5xl mx-auto">
          {currentStep === 'menu' && renderMainMenu()}
          {currentStep === 'listening' && <ListeningStep script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('quiz')} />}
          {currentStep === 'quiz' && <QuizStep quizzes={selectedEpisode.quizzes} onNext={() => setCurrentStep('vocabulary')} />}
          {currentStep === 'vocabulary' && <VocabularyStep questions={selectedEpisode.vocab_quizzes} rate={speechRate} onNext={() => setCurrentStep('dictation')} />}
          {currentStep === 'dictation' && <DictationStep script={selectedEpisode.script} items={selectedEpisode.dictation_items} rate={speechRate} onNext={() => setCurrentStep('reading')} />}
          {currentStep === 'reading' && <ReadingStep slashScript={selectedEpisode.slash_script || selectedEpisode.script} japanese={selectedEpisode.japanese_translation || ''} rate={speechRate} onNext={() => setCurrentStep('overlapping')} />}
          {currentStep === 'overlapping' && <OverlappingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('shadowing')} />}
          {currentStep === 'shadowing' && <ShadowingInternal script={selectedEpisode.script} rate={speechRate} onNext={() => setCurrentStep('practice')} />}
          {currentStep === 'practice' && <ReadingPractice script={selectedEpisode.script} onNext={(acc, wpm) => { setFinalScores({ acc, wpm }); setCurrentStep('result'); }} />}

          {currentStep === 'result' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-6 animate-in zoom-in duration-500">
              <CheckCircle size={64} className="text-green-500 mx-auto" />
              <h2 className="text-3xl font-black text-slate-800">Practice Finished!</h2>
              
              <div className="bg-white p-5 rounded-3xl shadow-md border-2 border-slate-100 flex justify-around">
                <div><p className="text-xs text-slate-400 font-bold uppercase">Accuracy</p><p className="text-3xl font-black text-cyan-500">{finalScores.acc}%</p></div>
                <div><p className="text-xs text-slate-400 font-bold uppercase">WPM</p><p className="text-3xl font-black text-rose-500">{finalScores.wpm}</p></div>
              </div>

              <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-[32px] shadow-lg border-2 border-orange-100 text-left space-y-4">
                <p className="text-xs font-black text-orange-500 uppercase tracking-widest text-center mb-2">生徒情報を入力してスコアを提出</p>
                
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-black text-slate-400 block mb-1">学年</label>
                    <input 
                      type="text" 
                      inputMode="numeric" 
                      pattern="[0-9]*"
                      placeholder="1" 
                      required 
                      disabled={isSent} 
                      value={studentInfo.grade} 
                      onChange={e => setStudentInfo({...studentInfo, grade: sanitizeNumber(e.target.value)})} 
                      className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-black text-slate-700 text-center focus:border-orange-400 outline-none disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 block mb-1">組</label>
                    <input 
                      type="text" 
                      inputMode="numeric" 
                      pattern="[0-9]*"
                      placeholder="3" 
                      required 
                      disabled={isSent} 
                      value={studentInfo.classNum} 
                      onChange={e => setStudentInfo({...studentInfo, classNum: sanitizeNumber(e.target.value)})} 
                      className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-black text-slate-700 text-center focus:border-orange-400 outline-none disabled:opacity-50" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 block mb-1">出席番号</label>
                    <input 
                      type="text" 
                      inputMode="numeric" 
                      pattern="[0-9]*"
                      placeholder="14" 
                      required 
                      disabled={isSent} 
                      value={studentInfo.attendNum} 
                      onChange={e => setStudentInfo({...studentInfo, attendNum: sanitizeNumber(e.target.value)})} 
                      className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-black text-slate-700 text-center focus:border-orange-400 outline-none disabled:opacity-50" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-[10px] font-black text-slate-400 block mb-1">氏名</label>
                  <input type="text" placeholder="英語 太郎" required disabled={isSent} value={studentInfo.name} onChange={e => setStudentInfo({...studentInfo, name: e.target.value})} className="w-full p-3 bg-slate-50 border-2 border-slate-100 rounded-xl font-black text-slate-700 focus:border-orange-400 outline-none disabled:opacity-50" />
                </div>

                {isSent ? (
                  <div className="w-full py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-md text-center animate-in fade-in duration-300">
                    提出完了！スプレッドシートに保存されました
                  </div>
                ) : (
                  <button type="submit" disabled={isSending} className="w-full py-4 bg-orange-500 text-white font-black rounded-2xl shadow-lg border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 hover:bg-orange-600 disabled:opacity-50">
                    {isSending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                    {isSending ? '送信中...' : '成績提出 (SUBMIT)'}
                  </button>
                )}
              </form>

              <button 
                onClick={() => { 
                  if (isExamStudentView) {
                    window.location.search = ""; 
                  } else {
                    setCurrentStep('menu'); setStudentInfo({ grade: '', classNum: '', attendNum: '', name: '' }); 
                  }
                }} 
                className="w-full py-4 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-colors"
              >
                {isExamStudentView ? 'テストポータルを閉じる' : 'メインメニューに戻る'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
