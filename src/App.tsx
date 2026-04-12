// --- メインメニュー用のレッスンセクション描画関数 ---
const renderLessonSection = (lessonNum: number, startId: number, endId: number) => (
  <section className="space-y-6">
    {/* ヘッダー：Lesson X のみのシンプルな表記 */}
    <div className="flex items-center gap-4 px-2">
      <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
        <span className="bg-orange-500 text-white px-4 py-1.5 rounded-xl shadow-sm">
          Lesson {lessonNum}
        </span>
      </h3>
      <div className="h-1 bg-slate-200 flex-1 rounded-full" />
    </div>

    {/* 各パートのカード */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courseData.episodes.filter(ep => ep.id >= startId && ep.id <= endId).map((ep, idx) => (
        <div 
          key={ep.id} 
          onClick={() => { stopSpeech(); setSelectedEpisode(ep); setCurrentStep('listening'); }} 
          className="group relative bg-white rounded-[32px] p-6 border-4 border-slate-100 hover:border-orange-400 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
        >
          {/* 背景の大きな数字（Part番号） */}
          <div className="absolute -right-4 -bottom-6 text-9xl font-black text-slate-50 group-hover:text-orange-50 transition-colors pointer-events-none">
            {idx + 1}
          </div>
          
          <div className="relative z-10 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
              P{idx + 1}
            </div>
            <div className="flex-1">
              <p className="text-xs font-black text-orange-400 uppercase tracking-widest mb-1">Part {idx + 1}</p>
              <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight group-hover:text-orange-600 transition-colors">
                {ep.title}
              </h3>
            </div>
            <Play className="text-slate-300 group-hover:text-orange-500 transition-all" size={20} fill="currentColor" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Appコンポーネント内での呼び出し部分 ---
{currentStep === 'menu' && (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
    {/* ブランドヘッダー */}
    <div className="text-center py-16 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner relative overflow-hidden">
      <h2 className="text-6xl md:text-7xl font-black text-orange-700 leading-none tracking-tighter">
        English<br /><span className="text-orange-500">Navigator</span>
      </h2>
      <div className="mt-6 w-24 h-2 bg-orange-500 mx-auto rounded-full" />
    </div>

    {/* レッスンリスト：タイトルを省き、ID範囲のみ指定 */}
    <div className="space-y-16">
      {renderLessonSection(1, 1, 4)}
      {renderLessonSection(2, 5, 8)}
    </div>

    <p className="text-center text-slate-400 font-bold text-sm pb-10">Master English through Listening, Reading, and Speaking.</p>
  </div>
)}
