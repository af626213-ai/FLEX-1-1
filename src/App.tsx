{currentStep === 'menu' && (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
    {/* ブランドヘッダー */}
    <div className="text-center py-16 bg-gradient-to-b from-orange-50 to-white rounded-[60px] border-4 border-orange-100 shadow-inner relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-200/20 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-300/10 rounded-full translate-x-20 translate-y-20" />
      
      <h1 className="text-sm font-black text-orange-400 uppercase tracking-[0.5em] mb-4 relative z-10">
        The Ultimate English Learning Method
      </h1>
      <h2 className="text-6xl md:text-7xl font-black text-orange-700 leading-none tracking-tighter relative z-10">
        English<br />
        <span className="text-orange-500">Navigator</span>
      </h2>
      <div className="mt-6 w-24 h-2 bg-orange-500 mx-auto rounded-full relative z-10" />
    </div>

    {/* レッスンリスト（グループ化表示） */}
    <div className="space-y-16">
      {/* Lesson 1 グループ */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 px-2">
          <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">Lesson 1</span>
            How Can We Become Stronger?
          </h3>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* id: 1〜4 を Part 1〜4 として表示 */}
          {courseData.episodes.filter(ep => ep.id <= 4).map((ep, idx) => (
            <div 
              key={ep.id} 
              onClick={() => { stopSpeech(); setSelectedEpisode(ep); setCurrentStep('listening'); }} 
              className="group relative bg-white rounded-[32px] p-6 border-4 border-slate-100 hover:border-orange-400 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
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

      {/* 今後 Lesson 2, 3 を追加する際は、同様の section を増やしていきます */}
    </div>

    <p className="text-center text-slate-400 font-bold text-sm pb-10">
      Master English through Listening, Reading, and Speaking.
    </p>
  </div>
)}
