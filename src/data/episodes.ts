// --- 型定義 ---
export type QuizQuestion = {
  q: string;
  options: string[];
  ans: string;
  explanation?: string;
};

export type KeyPhrase = {
  phrase: string;
  explanation: string;
};

export type Episode = {
  id: number;
  title: string;
  script: string;
  slash_script?: string;
  japanese_translation?: string;
  quizzes: QuizQuestion[];
  key_phrases: KeyPhrase[];
  dictation_items: string[];
  overlappingTips?: string;
  shadowingTips?: string;
};

export type CourseData = {
  course_title: string;
  episodes: Episode[];
};

// --- 実データ (1-50：クイズ2問・KeyPhrase2問・ディクテーション5問) ---
export const courseData: CourseData = {
  course_title: "Melody of Youth: Kaito’s High School Days",
  episodes: [
    {
      id: 1,
      title: "A Busy Monday Morning",
      script: "Today is Monday. Kaito woke up late because he was practicing guitar until midnight. He rushed to the station, but he realized he had left his smartphone at home.",
      slash_script: "Today is Monday. / Kaito woke up late / because he was practicing guitar / until midnight. / He rushed to the station, / but he realized / he had left his smartphone / at home.",
      japanese_translation: "今日は月曜日です。 / カイトは遅く起きました / なぜならギターを練習していたからです / 夜中の12時まで。 / 彼は駅へと急ぎました / しかし彼は気づきました / 彼はスマートフォンを置いてきたことに / 家に。",
      quizzes: [
        { q: "Why was Kaito late?", options: ["He was practicing guitar", "He missed the train", "He was sick", "He forgot his bag"], ans: "He was practicing guitar", explanation: "He was practicing until midnight." },
        { q: "What did Kaito realize at the station?", options: ["He forgot his guitar", "He missed the train", "He left his smartphone", "It was Sunday"], ans: "He left his smartphone", explanation: "He realized he had left his smartphone at home." }
      ],
      key_phrases: [
        { phrase: "realized that...", explanation: "〜ということに気づく。思考の結果としての気づきを表します。" },
        { phrase: "woke up late", explanation: "遅く起きた（寝坊した）。wake up の過去形です。" }
      ],
      dictation_items: [
        "Kaito woke up late because",
        "practicing guitar until midnight",
        "He rushed to the station",
        "but he realized he had",
        "left his smartphone at home"
      ],
      overlappingTips: "【コツ】焦っている気持ちを声に乗せましょう。",
      shadowingTips: "【コツ】スラッシュの区切りで息継ぎを意識して。"
    },
    {
      id: 2,
      title: "The First Period: English Class",
      script: "Kaito managed to arrive at school just before the chime. In the English class, Mr. Tanaka announced a surprise quiz. Kaito hadn't studied at all because of his guitar practice. He looked at the test paper and sighed.",
      slash_script: "Kaito managed to arrive at school / just before the chime. / In the English class, / Mr. Tanaka announced a surprise quiz. / Kaito hadn't studied at all / because of his guitar practice. / He looked at the test paper / and sighed.",
      japanese_translation: "カイトはなんとか学校に到着しました / チャイムが鳴る直前に。 / 英語の授業で / 田中先生が抜き打ちテストを発表しました。 / カイトは全く勉強していませんでした / ギターの練習のせいで。 / 彼はテスト用紙を見て / そしてため息をつきました。",
      quizzes: [
        { q: "When did Kaito arrive at school?", options: ["After the chime", "Just before the chime", "An hour early", "At noon"], ans: "Just before the chime", explanation: "He arrived just before the chime." },
        { q: "Why was Kaito unprepared for the quiz?", options: ["He forgot his book", "Because of guitar practice", "He was sleeping", "He was sick"], ans: "Because of guitar practice", explanation: "He hadn't studied at all because of his practice." }
      ],
      key_phrases: [
        { phrase: "managed to ~", explanation: "なんとか〜する。苦労して何かを成し遂げる時に使います。" },
        { phrase: "not ~ at all", explanation: "全く〜ない。強い否定を表す表現です。" }
      ],
      dictation_items: [
        "managed to arrive at school",
        "just before the chime",
        "announced a surprise quiz",
        "Kaito hadn't studied at all",
        "because of his guitar practice"
      ],
      overlappingTips: "【コツ】'at all' を強めて「全く〜ない」を強調しましょう。",
      shadowingTips: "【コツ】ため息をつくようなニュアンスを最後に込めて。"
    },
    {
      id: 3,
      title: "Lunch Break with Hana",
      script: "At lunch break, Kaito met his friend Hana. She was eating a delicious lunch box. Kaito told her about the difficult English quiz. Hana smiled and said, 'Don't worry. I can help you study after school.' Kaito felt a little better.",
      slash_script: "At lunch break, / Kaito met his friend Hana. / She was eating / a delicious lunch box. / Kaito told her / about the difficult English quiz. / Hana smiled and said, / 'Don't worry. / I can help you study / after school.' / Kaito felt a little better.",
      japanese_translation: "昼休みに / カイトは友人のハナに会いました。 / 彼女は食べていました / 美味しそうなお弁当を。 / カイトは彼女に話しました / 難しい英語のテストについて。 / ハナは微笑んで言いました / 「心配しないで。 / 私が勉強を手伝ってあげるわ / 放課後に。」 / カイトは少し気分が良くなりました。",
      quizzes: [
        { q: "What was Hana eating?", options: ["Sandwich", "Delicious lunch box", "Apple", "Nothing"], ans: "Delicious lunch box", explanation: "She was eating a delicious lunch box." },
        { q: "What did Hana say to Kaito?", options: ["Good luck", "Don't worry", "Study harder", "Go home"], ans: "Don't worry", explanation: "She encouraged him by saying 'Don't worry'." }
      ],
      key_phrases: [
        { phrase: "feel better", explanation: "気分が良くなる。落ち込んでいた状態から回復する時に使います。" },
        { phrase: "help you study", explanation: "あなたの勉強を手伝う。help (人) (動詞の原形) の形です。" }
      ],
      dictation_items: [
        "met his friend Hana",
        "eating a delicious lunch box",
        "about the difficult English quiz",
        "help you study after school",
        "Kaito felt a little better"
      ],
      overlappingTips: "【コツ】ハナの台詞は優しく明るい声で。",
      shadowingTips: "【コツ】'Don't worry' のリズムを真似して。"
    },
    {
      id: 4,
      title: "The Music Room",
      script: "After school, Kaito went to the music room. He saw many students practicing instruments. A girl was playing the piano, and a boy was playing the drums. Kaito picked up his guitar and started to play a song by X Japan. He forgot all his stress.",
      slash_script: "After school, / Kaito went to the music room. / He saw many students / practicing instruments. / A girl was playing the piano, / and a boy was playing the drums. / Kaito picked up his guitar / and started to play / a song by X Japan. / He forgot all his stress.",
      japanese_translation: "放課後 / カイトは音楽室へ行きました。 / 彼は多くの生徒を見ました / 楽器を練習している。 / 女の子がピアノを弾いていて / そして男の子がドラムを叩いていました。 / カイトは自分のギターを手に取り / そして弾き始めました / X Japanの歌を。 / 彼はすべてのストレスを忘れました。",
      quizzes: [
        { q: "What was the boy doing?", options: ["Playing guitar", "Playing drums", "Singing", "Listening"], ans: "Playing drums", explanation: "A boy was playing the drums." },
        { q: "What happened to Kaito's stress?", options: ["It increased", "He forgot it", "He talked about it", "He felt tired"], ans: "He forgot it", explanation: "He forgot all his stress by playing guitar." }
      ],
      key_phrases: [
        { phrase: "pick up (something)", explanation: "〜を手に取る。持ち上げる、拾い上げるという動作です。" },
        { phrase: "forgot all his stress", explanation: "すべてのストレスを忘れた。forgetの過去形がforgotです。" }
      ],
      dictation_items: [
        "went to the music room",
        "saw many students practicing instruments",
        "playing the piano and drums",
        "picked up his guitar and",
        "He forgot all his stress"
      ],
      overlappingTips: "【コツ】好きなことに熱中している様子を声に出して。",
      shadowingTips: "【コツ】楽器の音を背景に想像しながら音読して。"
    },
    {
      id: 5,
      title: "The Library Challenge",
      script: "The next day, Kaito and Hana went to the library. It was very quiet, so they had to speak in whispers. They studied English grammar together for two hours. Kaito finally understood how to use 'present perfect.' He was ready for the next test.",
      slash_script: "The next day, / Kaito and Hana went to the library. / It was very quiet, / so they had to speak / in whispers. / They studied English grammar together / for two hours. / Kaito finally understood / how to use 'present perfect.' / He was ready / for the next test.",
      japanese_translation: "翌日 / カイトとハナは図書室へ行きました。 / とても静かでした / だから彼らは話さなければなりませんでした / ひそひそ声で。 / 彼らは一緒に英文法を勉強しました / 2時間の間。 / カイトはついに理解しました / 「現在完了」の使い方を。 / 彼は準備ができていました / 次のテストへの。",
      quizzes: [
        { q: "How long did they study?", options: ["One hour", "Two hours", "All day", "30 minutes"], ans: "Two hours", explanation: "They studied together for two hours." },
        { q: "Why did they speak in whispers?", options: ["It was a secret", "It was very quiet", "They were tired", "They were late"], ans: "It was very quiet", explanation: "In a quiet library, you must whisper." }
      ],
      key_phrases: [
        { phrase: "in whispers", explanation: "ひそひそ声で。whisper は「ささやく」という意味です。" },
        { phrase: "how to use ~", explanation: "〜の使い方。how to + 動詞の原形で「〜の仕方」となります。" }
      ],
      dictation_items: [
        "went to the library yesterday",
        "had to speak in whispers",
        "studied English grammar together for",
        "finally understood how to use",
        "ready for the next test"
      ],
      overlappingTips: "【コツ】静かな場所で話しているようなトーンで。",
      shadowingTips: "【コツ】'present perfect' の用語をはっきりと。"
    },
    {
      id: 6,
      title: "Joining the Guitar Club",
      script: "Kaito decided to join the guitar club. At the first meeting, the leader asked him, 'Can you play any songs?' Kaito played a simple melody. Everyone clapped their hands. Kaito was very happy. He made three new friends in the club.",
      slash_script: "Kaito decided / to join the guitar club. / At the first meeting, / the leader asked him, / 'Can you play any songs?' / Kaito played a simple melody. / Everyone clapped their hands. / Kaito was very happy. / He made three new friends / in the club.",
      japanese_translation: "カイトは決めました / ギター部に入ることを。 / 最初のミーティングで / 部長が彼に尋ねました / 「何か曲を弾けるかい？」 / カイトはシンプルなメロディーを弾きました。 / みんなが手を叩きました。 / カイトはとても幸せでした。 / 彼は3人の新しい友達を作りました / 部活の中で。",
      quizzes: [
        { q: "What did the leader ask Kaito?", options: ["Can you sing?", "Can you play any songs?", "Do you have a guitar?", "Who are you?"], ans: "Can you play any songs?", explanation: "The leader asked if he could play anything." },
        { q: "How did everyone react to his playing?", options: ["They laughed", "They left", "They clapped their hands", "They were silent"], ans: "They clapped their hands", explanation: "Everyone clapped because they liked it." }
      ],
      key_phrases: [
        { phrase: "clap one's hands", explanation: "手をたたく。拍手するという意味です。" },
        { phrase: "decided to ~", explanation: "〜することに決めた。決断を表す表現です。" }
      ],
      dictation_items: [
        "decided to join the guitar",
        "at the first meeting the",
        "asked him can you play",
        "everyone clapped their hands and",
        "made three new friends in"
      ],
      overlappingTips: "【コツ】嬉しそうな気持ちを込めて発音しましょう。",
      shadowingTips: "【コツ】'everyone clapped' の繋がりを意識して。"
    },
    {
      id: 7,
      title: "Hana's Dream",
      script: "One day, Hana and Kaito were walking home. Kaito asked, 'What is your dream, Hana?' She answered, 'I want to be a nurse. I want to help sick people.' Kaito was surprised because Hana was always interested in art.",
      slash_script: "One day, / Hana and Kaito were walking home. / Kaito asked, / 'What is your dream, Hana?' / She answered, / 'I want to be a nurse. / I want to help sick people.' / Kaito was surprised / because Hana was always interested / in art.",
      japanese_translation: "ある日 / ハナとカイトは歩いて帰っていました。 / カイトが尋ねました / 「君の夢は何だい、ハナ？」 / 彼女は答えました / 「私は看護師になりたいの。 / 病気の人たちを助けたいわ。」 / カイトは驚きました / なぜならハナはいつも興味を持っていたからです / 芸術に。",
      quizzes: [
        { q: "Who does Hana want to help?", options: ["Artists", "Sick people", "Teachers", "Kaito"], ans: "Sick people", explanation: "She wants to be a nurse to help sick people." },
        { q: "What was Hana usually interested in?", options: ["Music", "Art", "Sports", "Cooking"], ans: "Art", explanation: "Hana was always interested in art." }
      ],
      key_phrases: [
        { phrase: "be interested in ~", explanation: "〜に興味がある。状態を表す定番の表現です。" },
        { phrase: "want to be ~", explanation: "〜になりたい。将来の夢などを語る時に使います。" }
      ],
      dictation_items: [
        "were walking home one day",
        "what is your dream Hana",
        "I want to be a",
        "want to help sick people",
        "always interested in art before"
      ],
      overlappingTips: "【コツ】将来について語る、真剣な雰囲気で。",
      shadowingTips: "【コツ】'sick people' の発音をクリアに。"
    },
    {
      id: 8,
      title: "The Rainy Season",
      script: "June came, and the rainy season started. It was raining every day. Kaito couldn't play basketball outside. He felt a bit sad. However, he had more time to practice the guitar at home. He practiced a difficult song perfectly.",
      slash_script: "June came, / and the rainy season started. / It was raining every day. / Kaito couldn't play basketball / outside. / He felt a bit sad. / However, / he had more time / to practice the guitar / at home. / He practiced a difficult song / perfectly.",
      japanese_translation: "6月が来ました / そして梅雨が始まりました。 / 毎日雨が降っていました。 / カイトはバスケットボールをすることができませんでした / 外で。 / 彼は少し悲しく感じました。 / しかしながら / 彼にはもっと時間がありました / ギターを練習するための / 家で。 / 彼は難しい曲を練習しました / 完璧に。",
      quizzes: [
        { q: "When did the rainy season start?", options: ["April", "May", "June", "July"], ans: "June", explanation: "The script says June came and it started." },
        { q: "How did Kaito feel at first?", options: ["Excited", "A bit sad", "Angry", "Happy"], ans: "A bit sad", explanation: "He felt sad because he couldn't play basketball." }
      ],
      key_phrases: [
        { phrase: "rainy season", explanation: "梅雨。日本の特有の気象現象を指すことが多いです。" },
        { phrase: "a bit sad", explanation: "少し悲しい。a bit で「少し」という意味を添えます。" }
      ],
      dictation_items: [
        "rainy season started in June",
        "raining every day this month",
        "couldn't play basketball outside today",
        "more time to practice the",
        "practiced a difficult song perfectly"
      ],
      overlappingTips: "【コツ】'However' の後の逆転のニュアンスを大事に。",
      shadowingTips: "【コツ】'perfectly' の語尾をはっきりと。"
    },
    {
      id: 9,
      title: "A Big Announcement",
      script: "Mr. Tanaka entered the classroom with a big smile. 'Listen, everyone!' he said. 'We will have a school festival next month.' Kaito's class decided to do a small concert. Kaito was chosen as a guitar player.",
      slash_script: "Mr. Tanaka entered the classroom / with a big smile. / 'Listen, everyone!' / he said. / 'We will have a school festival / next month.' / Kaito's class decided / to do a small concert. / Kaito was chosen / as a guitar player.",
      japanese_translation: "田中先生が教室に入ってきました / 満面の笑みで。 / 「みんな、聞いてくれ！」 / と彼は言いました。 / 「学園祭があるぞ / 来月。」 / カイトのクラスは決めました / 小さなコンサートをすることを。 / カイトは選ばれました / ギタリストとして。",
      quizzes: [
        { q: "How did Mr. Tanaka enter the room?", options: ["With a big smile", "Quietly", "With a book", "Angrily"], ans: "With a big smile", explanation: "He entered with a big smile." },
        { q: "What will they have next month?", options: ["Test", "Sports day", "School festival", "Holiday"], ans: "School festival", explanation: "The announcement was about the school festival." }
      ],
      key_phrases: [
        { phrase: "be chosen as ~", explanation: "〜として選ばれる。選出された結果を表す受身形です。" },
        { phrase: "decided to do ~", explanation: "〜をすることに決めた。具体的な行動を決めた時に使います。" }
      ],
      dictation_items: [
        "entered the classroom with a",
        "listen everyone he said loudly",
        "have a school festival next",
        "class decided to do a",
        "chosen as a guitar player"
      ],
      overlappingTips: "【コツ】先生のワクワクした声を真似てみて。",
      shadowingTips: "【コツ】'next month' を強調して追いかけて。"
    },
    {
      id: 10,
      title: "First Term Exams",
      script: "Before the festival, the students had to take the first term exams. Kaito had to study very hard. He went to the library with Hana every day. 'If we pass these exams, we can enjoy the festival!' Hana said.",
      slash_script: "Before the festival, / the students had to take / the first term exams. / Kaito had to study / very hard. / He went to the library / with Hana every day. / 'If we pass these exams, / we can enjoy the festival!' / Hana said.",
      japanese_translation: "学園祭の前に / 生徒たちは受けなければなりませんでした / 1学期の試験を。 / カイトは勉強しなければなりませんでした / とても一生懸命に。 / 彼は図書室へ行きました / 毎日ハナと一緒に。 / 「もしこの試験に受かれば / 私たちは学園祭を楽しめるわよ！」 / とハナは言いました。",
      quizzes: [
        { q: "What did Hana say about the exams?", options: ["They are too hard", "Pass them to enjoy festival", "Don't study", "I hate exams"], ans: "Pass them to enjoy festival", explanation: "She linked the exam success to the festival fun." },
        { q: "Who did Kaito go to the library with?", options: ["Mr. Tanaka", "Hana", "His parents", "Alone"], ans: "Hana", explanation: "He went to the library with Hana every day." }
      ],
      key_phrases: [
        { phrase: "take the exams", explanation: "試験を受ける。試験に「挑む」という動作を表します。" },
        { phrase: "study very hard", explanation: "とても一生懸命勉強する。副詞 very hard が study を飾ります。" }
      ],
      dictation_items: [
        "students had to take the",
        "Kaito had to study very",
        "to the library with Hana",
        "if we pass these exams",
        "we can enjoy the festival"
      ],
      overlappingTips: "【コツ】'study very hard' の決意を込めて。",
      shadowingTips: "【コツ】ハナの励ますような口調をコピーして。"
    },
    {
      id: 11,
      title: "The Summer Festival Plan",
      script: "Summer vacation has finally started. Kaito and his friends met at a cafe to plan for the school festival. They decided to practice their performance every Tuesday and Thursday. Kaito felt excited about playing the guitar in front of everyone.",
      slash_script: "Summer vacation / has finally started. / Kaito and his friends / met at a cafe / to plan / for the school festival. / They decided / to practice their performance / every Tuesday and Thursday. / Kaito felt excited / about playing the guitar / in front of everyone.",
      japanese_translation: "夏休みが / ついに始まりました。 / カイトと友人たちは / カフェで集まりました / 計画を立てるために / 学園祭の。 / 彼らは決めました / パフォーマンスを練習することを / 毎週火曜日と木曜日に。 / カイトはワクワクしていました / ギターを弾くことに / みんなの前で。",
      quizzes: [
        { q: "Where did Kaito and his friends meet?", options: ["At school", "At a cafe", "At Hana's house", "At the station"], ans: "At a cafe", explanation: "They met at a cafe to plan for the festival." },
        { q: "On which days did they decide to practice?", options: ["Every day", "Monday and Wednesday", "Tuesday and Thursday", "Weekends"], ans: "Tuesday and Thursday", explanation: "They chose every Tuesday and Thursday for practice." }
      ],
      key_phrases: [
        { phrase: "be excited about ~", explanation: "〜にワクワクしている。前向きな期待感を表す重要表現です。" },
        { phrase: "in front of everyone", explanation: "みんなの前で。人前で何かをする時の定型句です。" }
      ],
      dictation_items: [
        "summer vacation has finally started",
        "met at a cafe to",
        "plan for the school festival",
        "practice their performance every Tuesday",
        "excited about playing the guitar"
      ],
      overlappingTips: "【コツ】'Finally started' の喜びに満ちた声を真似しましょう。",
      shadowingTips: "【コツ】曜日の発音を正確に追いかけて。"
    },
    {
      id: 12,
      title: "Practice in the Heat",
      script: "The weather was extremely hot in August. Kaito carried his heavy guitar case to the music room every morning. Even though it was difficult, he never gave up. He wanted to play 'Endless Rain' perfectly for the audience.",
      slash_script: "The weather was extremely hot / in August. / Kaito carried / his heavy guitar case / to the music room / every morning. / Even though / it was difficult, / he never gave up. / He wanted to play / 'Endless Rain' / perfectly / for the audience.",
      japanese_translation: "天気は非常に暑かったです / 8月は。 / カイトは運びました / 自分の重いギターケースを / 音楽室へ / 毎朝。 / ～だけれども / それは大変でしたが / 彼は決して諦めませんでした。 / 彼は弾きたいと思っていました / 「Endless Rain」を / 完璧に / 観客のために。",
      quizzes: [
        { q: "How was the weather in August?", options: ["Rainy", "Extremely hot", "Cool", "Snowy"], ans: "Extremely hot", explanation: "The weather was extremely hot in August." },
        { q: "What song did Kaito want to play?", options: ["X Japan's song", "Endless Rain", "A simple melody", "Jazz"], ans: "Endless Rain", explanation: "He wanted to play 'Endless Rain' perfectly." }
      ],
      key_phrases: [
        { phrase: "even though ~", explanation: "〜だけれども。逆接の譲歩を表す接続詞です。" },
        { phrase: "never gave up", explanation: "決して諦めなかった。give up の過去形です。" }
      ],
      dictation_items: [
        "weather was extremely hot in",
        "carried his heavy guitar case",
        "to the music room every",
        "even though it was difficult",
        "he never gave up practicing"
      ],
      overlappingTips: "【コツ】暑さに耐えて頑張る力強さを出して。",
      shadowingTips: "【コツ】'never gave up' の強い意志を込めて。"
    },
    {
      id: 13,
      title: "Hana's Encouragement",
      script: "One afternoon, Kaito was struggling with a fast guitar solo. Hana brought him a cold drink and said, 'You are doing great, Kaito. Just keep practicing.' Her words gave him the energy to continue for another hour.",
      slash_script: "One afternoon, / Kaito was struggling / with a fast guitar solo. / Hana brought him / a cold drink / and said, / 'You are doing great, Kaito. / Just keep practicing.' / Her words gave him / the energy / to continue / for another hour.",
      japanese_translation: "ある日の午後 / カイトは苦戦していました / 速いギターソロに。 / ハナは彼に持ってきました / 冷たい飲み物を / そして言いました / 「あなたはよくやっているわ、カイト。 / ただ練習を続けて。」 / 彼女の言葉は彼に与えました / エネルギーを / 続けるための / もう1時間。",
      quizzes: [
        { q: "What was Kaito struggling with?", options: ["Homework", "A fast guitar solo", "His health", "A broken string"], ans: "A fast guitar solo", explanation: "He was struggling with a fast guitar solo." },
        { q: "What did Hana bring for Kaito?", options: ["A new guitar", "A cold drink", "A music book", "Lunch"], ans: "A cold drink", explanation: "Hana brought him a cold drink." }
      ],
      key_phrases: [
        { phrase: "struggling with ~", explanation: "〜に苦戦している。困難に取り組む様子を表します。" },
        { phrase: "keep practicing", explanation: "練習し続ける。keep + ~ing で動作の継続を表します。" }
      ],
      dictation_items: [
        "struggling with a fast guitar",
        "brought him a cold drink",
        "said you are doing great",
        "just keep practicing her words",
        "continue for another hour today"
      ],
      overlappingTips: "【コツ】ハナのセリフは明るく励ますように。",
      shadowingTips: "【コツ】'another hour' のリズムを崩さずに。"
    },
    {
      id: 14,
      title: "The Mysterious Drummer",
      script: "A new student named Leo joined the band as a drummer. He was very quiet, but his drumming was powerful and professional. Kaito was surprised to learn that Leo also liked X Japan. They became friends through their favorite music.",
      slash_script: "A new student / named Leo / joined the band / as a drummer. / He was very quiet, / but his drumming / was powerful and professional. / Kaito was surprised / to learn / that Leo also liked X Japan. / They became friends / through their favorite music.",
      japanese_translation: "一人の新入生が / レオという名前の / バンドに加わりました / ドラマーとして。 / 彼はとても静かでした / しかし彼のドラム演奏は / 力強くプロ並みでした。 / カイトは驚きました / 知って / レオもX Japanが好きだということを。 / 彼らは友達になりました / 彼らのお気に入りの音楽を通じて。",
      quizzes: [
        { q: "Who is Leo?", options: ["A singer", "A new student", "A teacher", "Kaito's brother"], ans: "A new student", explanation: "Leo is a new student who joined as a drummer." },
        { q: "How was Leo's drumming?", options: ["Weak", "Professional and powerful", "Too loud", "Bad"], ans: "Professional and powerful", explanation: "The script says his drumming was powerful and professional." }
      ],
      key_phrases: [
        { phrase: "be surprised to learn ~", explanation: "〜を知って驚く。感情の原因を不定詞で表します。" },
        { phrase: "through their favorite music", explanation: "お気に入りの音楽を通じて。共通点を通じた交流を表します。" }
      ],
      dictation_items: [
        "joined the band as a",
        "but his drumming was powerful",
        "surprised to learn that Leo",
        "Leo also liked X Japan",
        "friends through their favorite music"
      ],
      overlappingTips: "【コツ】'powerful' を少し強く発音してみましょう。",
      shadowingTips: "【コツ】'Leo' と 'X Japan' の固有名詞をはっきりと。"
    },
    {
      id: 15,
      title: "Future Dreams and Anxiety",
      script: "As autumn approached, the third-year students started talking about university. Hana was studying hard for nursing school. Kaito felt anxious about his future. He wondered if he could continue music after graduation.",
      slash_script: "As autumn approached, / the third-year students / started talking / about university. / Hana was studying hard / for nursing school. / Kaito felt anxious / about his future. / He wondered / if he could continue / music / after graduation.",
      japanese_translation: "秋が近づくにつれて / 3年生たちは / 話し始めました / 大学について。 / ハナは一生懸命勉強していました / 看護学校のために。 / カイトは不安を感じました / 自分の将来について。 / 彼は～だろうかと思いました / 彼が続けられるかどうかを / 音楽を / 卒業した後に。",
      quizzes: [
        { q: "What were the third-year students talking about?", options: ["Summer vacation", "University", "The festival", "A new song"], ans: "University", explanation: "They started talking about university." },
        { q: "What was Hana studying for?", options: ["Music school", "Nursing school", "Art school", "English test"], ans: "Nursing school", explanation: "Hana was studying hard for nursing school." }
      ],
      key_phrases: [
        { phrase: "feel anxious about ~", explanation: "〜について不安に思う。将来などの不透明なものへの不安です。" },
        { phrase: "after graduation", explanation: "卒業後。学校を終えた後の進路の話でよく使います。" }
      ],
      dictation_items: [
        "As autumn approached the students",
        "started talking about university life",
        "Hana was studying hard for",
        "felt anxious about his future",
        "continue music after graduation day"
      ],
      overlappingTips: "【コツ】少し考え込むような、落ち着いたトーンで。",
      shadowingTips: "【コツ】'graduation' の長い発音に気をつけて。"
    },
    {
      id: 16,
      title: "Advice from Mr. Tanaka",
      script: "Kaito visited the teachers' room to see Mr. Tanaka. 'You don't have to choose only one thing, Kaito,' Mr. Tanaka said. 'Music can be a part of your life even if you choose a different career.' Kaito felt a heavy burden lift from his shoulders.",
      slash_script: "Kaito visited the teachers' room / to see Mr. Tanaka. / 'You don't have to choose / only one thing, Kaito,' / Mr. Tanaka said. / 'Music can be a part / of your life / even if / you choose / a different career.' / Kaito felt / a heavy burden lift / from his shoulders.",
      japanese_translation: "カイトは職員室を訪れました / 田中先生に会うために。 / 「君は選ぶ必要はないんだよ / たった一つのことだけを、カイト」 / 田中先生は言いました。 / 「音楽は一部になれるんだ / 君の人生の / たとえ～だとしても / 君が選んだとしても / 異なるキャリアを。」 / カイトは感じました / 重い荷が下りるのを / 自分の肩から。",
      quizzes: [
        { q: "What was Mr. Tanaka's advice?", options: ["Give up music", "Don't choose only one", "Go to music college", "Work at a bank"], ans: "Don't choose only one", explanation: "Mr. Tanaka said he doesn't have to choose only one thing." },
        { q: "How did Kaito feel after the talk?", options: ["More worried", "He felt a burden lift", "Angry", "Tired"], ans: "He felt a burden lift", explanation: "Kaito felt a heavy burden lift from his shoulders." }
      ],
      key_phrases: [
        { phrase: "don't have to ~", explanation: "〜する必要はない。義務の否定を表します。" },
        { phrase: "a part of your life", explanation: "あなたの人生の一部。趣味や活動が人生に占める割合を表します。" }
      ],
      dictation_items: [
        "visited the teachers' room to",
        "don't have to choose only",
        "part of your life even",
        "if you choose different career",
        "burden lift from his shoulders"
      ],
      overlappingTips: "【コツ】先生のアドバイスを噛みしめるようにゆっくりと。",
      shadowingTips: "【コツ】'career'［kəríər］の発音を正確に真似て。"
    },
    {
      id: 17,
      title: "The Festival Poster",
      script: "Hana asked Kaito to help her with the festival poster. She was talented at drawing. Kaito suggested adding a small guitar illustration in the corner. Together, they created a beautiful poster that attracted many students' attention.",
      slash_script: "Hana asked Kaito / to help her / with the festival poster. / She was talented / at drawing. / Kaito suggested / adding a small guitar illustration / in the corner. / Together, / they created / a beautiful poster / that attracted / many students' attention.",
      japanese_translation: "ハナはカイトに頼みました / 彼女を手伝ってくれるよう / 学園祭のポスターで。 / 彼女は才能がありました / 絵を描くことに。 / カイトは提案しました / 小さなギターのイラストを加えることを / 隅に。 / 一緒に / 彼らは作り上げました / 美しいポスターを / それは引きつけました / 多くの生徒の注意を。",
      quizzes: [
        { q: "What was Hana talented at?", options: ["Singing", "Drawing", "Cooking", "Sports"], ans: "Drawing", explanation: "Hana was talented at drawing." },
        { q: "What did Kaito suggest adding?", options: ["A picture of Hana", "A small guitar illustration", "More colors", "A poem"], ans: "A small guitar illustration", explanation: "Kaito suggested adding a small guitar illustration." }
      ],
      key_phrases: [
        { phrase: "be talented at ~", explanation: "〜の才能がある。得意な分野を指します。" },
        { phrase: "attracted attention", explanation: "注意を引きつけた。注目を集めた時に使います。" }
      ],
      dictation_items: [
        "help her with the festival",
        "she was talented at drawing",
        "adding a small guitar illustration",
        "created a beautiful poster that",
        "attracted many students' attention"
      ],
      overlappingTips: "【コツ】共同作業の楽しさを表現して。",
      shadowingTips: "【コツ】'illustration' のアクセントに注意して。"
    },
    {
      id: 18,
      title: "A Sudden Trouble",
      script: "Three days before the festival, Kaito's guitar string broke during practice. He didn't have any spare strings. Luckily, Leo had an extra set and gave it to him. 'We are a team,' Leo said with a rare smile.",
      slash_script: "Three days / before the festival, / Kaito's guitar string broke / during practice. / He didn't have / any spare strings. / Luckily, / Leo had an extra set / and gave it to him. / 'We are a team,' / Leo said / with a rare smile.",
      japanese_translation: "3日前 / 学園祭の / カイトのギターの弦が切れました / 練習中に。 / 彼は持っていませんでした / 何の予備の弦も。 / 幸運なことに / レオが予備のセットを持っていました / そしてそれを彼にくれました。 / 「僕たちはチームだよ」 / レオは言いました / 珍しい微笑みとともに。",
      quizzes: [
        { q: "What happened to Kaito's guitar?", options: ["It was stolen", "The string broke", "It was lost", "It didn't sound good"], ans: "The string broke", explanation: "Kaito's guitar string broke during practice." },
        { q: "Who helped Kaito with a spare string?", options: ["Hana", "Mr. Tanaka", "Leo", "A music shop"], ans: "Leo", explanation: "Leo had an extra set and gave it to him." }
      ],
      key_phrases: [
        { phrase: "spare strings", explanation: "予備の弦。予備のもの全般に spare を使います。" },
        { phrase: "with a rare smile", explanation: "珍しい微笑みとともに。滅多に笑わない人が笑った時に使います。" }
      ],
      dictation_items: [
        "three days before the festival",
        "guitar string broke during practice",
        "didn't have any spare strings",
        "Leo had an extra set",
        "said with a rare smile"
      ],
      overlappingTips: "【コツ】レオのセリフは短く、力強く。",
      shadowingTips: "【コツ】'Luckily' のホッとした響きを大切に。"
    },
    {
      id: 19,
      title: "The Rehearsal Night",
      script: "The rehearsal took place on the stage in the gym. The lights were bright, and the room was cold. Kaito's hands were shaking slightly. He closed his eyes and remembered the long hours of practice in the music room.",
      slash_script: "The rehearsal / took place / on the stage / in the gym. / The lights were bright, / and the room was cold. / Kaito's hands / were shaking slightly. / He closed his eyes / and remembered / the long hours of practice / in the music room.",
      japanese_translation: "リハーサルは / 行われました / ステージの上で / 体育館の。 / 照明は明るく / そして部屋は寒かったです。 / カイトの手は / わずかに震えていました。 / 彼は目を閉じ / そして思い出しました / 長い時間の練習を / 音楽室での。",
      quizzes: [
        { q: "Where was the rehearsal held?", options: ["In the classroom", "In the gym", "In the music room", "At the library"], ans: "In the gym", explanation: "The rehearsal took place on the stage in the gym." },
        { q: "Why were Kaito's hands shaking?", options: ["He was cold", "He was nervous", "He was tired", "He was hungry"], ans: "He was nervous", explanation: "His hands were shaking slightly before the performance." }
      ],
      key_phrases: [
        { phrase: "take place", explanation: "行われる。イベントや出来事が開催されるという意味です。" },
        { phrase: "shaking slightly", explanation: "わずかに震えている。緊張や寒さでの震えを表します。" }
      ],
      dictation_items: [
        "took place on the stage",
        "lights were bright and room",
        "hands were shaking slightly now",
        "remembered the long hours of",
        "practice in the music room"
      ],
      overlappingTips: "【コツ】緊張感（shaking slightly）を声に乗せて。",
      shadowingTips: "【コツ】'remembered' の R の音を丁寧に。"
    },
    {
      id: 20,
      title: "Showtime!",
      script: "Finally, it was time for the festival. The gym was full of students and teachers. Kaito stood on the stage and looked at Hana in the front row. She gave him a thumbs-up. Kaito played the first note of 'Endless Rain,' and the music filled the air.",
      slash_script: "Finally, / it was time / for the festival. / The gym was full / of students and teachers. / Kaito stood / on the stage / and looked at Hana / in the front row. / She gave him a thumbs-up. / Kaito played the first note / of 'Endless Rain,' / and the music / filled the air.",
      japanese_translation: "ついに / 時間が来ました / 学園祭の。 / 体育館はいっぱいでした / 生徒と先生たちで。 / カイトは立ちました / ステージの上に / そしてハナを見ました / 最前列にいる。 / 彼女は彼に親指を立てて合図しました。 / カイトは最初の一音を奏でました / 「Endless Rain」の / そして音楽が / 空気を満たしました（あたりに響き渡りました）。",
      quizzes: [
        { q: "Who was Kaito looking at in the front row?", options: ["Mr. Tanaka", "Hana", "Leo", "His parents"], ans: "Hana", explanation: "Kaito looked at Hana in the front row." },
        { q: "What did Hana give to Kaito?", options: ["A thumbs-up", "A flower", "A guitar string", "A drink"], ans: "A thumbs-up", explanation: "She gave him a thumbs-up as encouragement." }
      ],
      key_phrases: [
        { phrase: "full of ~", explanation: "〜でいっぱい。人や物で満たされている状態です。" },
        { phrase: "fill the air", explanation: "空気（あたり一面）を満たす。音や香りが広がる様子です。" }
      ],
      dictation_items: [
        "gym was full of students",
        "looked at Hana in front",
        "she gave him thumbs up",
        "played the first note of",
        "and the music filled air"
      ],
      overlappingTips: "【コツ】物語の最高潮！堂々と伸びやかに発音しましょう。",
      shadowingTips: "【コツ】'Endless Rain' の響きを大切に追いかけて。"
    },
    {
      id: 21,
      title: "After the Spotlight",
      script: "After the successful performance, Kaito couldn't sleep. He kept thinking about the applause from the crowd. He realized that music was not just a hobby anymore. It was a part of who he was. However, the entrance exams were getting closer every day.",
      slash_script: "After the successful performance, / Kaito couldn't sleep. / He kept thinking / about the applause / from the crowd. / He realized / that music was not / just a hobby anymore. / It was a part / of who he was. / However, / the entrance exams / were getting closer / every day.",
      japanese_translation: "成功したパフォーマンスの後で、 / カイトは眠れませんでした。 / 彼は考え続けました / 拍手について / 観衆からの。 / 彼は気づきました / 音楽はもはや～ではないと / 単なる趣味ではないと。 / それは一部でした / 彼のアイデンティティ（彼という人間）の。 / しかしながら、 / 入学試験が / 近づいてきていました / 毎日。",
      quizzes: [
        { q: "Why couldn't Kaito sleep?", options: ["He was sick", "He was thinking about applause", "The room was loud", "He was studying"], ans: "He was thinking about applause", explanation: "He couldn't sleep because he was thinking about the performance." },
        { q: "What was getting closer every day?", options: ["The festival", "The graduation", "The entrance exams", "The winter vacation"], ans: "The entrance exams", explanation: "The entrance exams were getting closer every day." }
      ],
      key_phrases: [
        { phrase: "not ~ anymore", explanation: "もはや〜ではない。以前とは違う状態になった時に使います。" },
        { phrase: "getting closer", explanation: "近づいている。期日や距離が迫ってくる時に使います。" }
      ],
      dictation_items: [
        "after the successful performance Kaito",
        "thinking about applause from crowd",
        "music not just a hobby",
        "part of who he was",
        "exams were getting closer everyday"
      ],
      overlappingTips: "【コツ】'However' の後の現実に戻る感覚を声で表現して。",
      shadowingTips: "【コツ】'Applause' の発音に注意して追いかけましょう。"
    },
    {
      id: 22,
      title: "Hana's Decision",
      script: "Hana decided to apply for a famous nursing college in Osaka. Kaito was happy for her, but he felt a little lonely. Osaka was far from their town. 'If we both work hard, we can reach our goals,' Hana said firmly.",
      slash_script: "Hana decided / to apply for / a famous nursing college / in Osaka. / Kaito was happy for her, / but he felt / a little lonely. / Osaka was far / from their town. / 'If we both work hard, / we can reach / our goals,' / Hana said firmly.",
      japanese_translation: "ハナは決めました / 志願することを / 有名な看護大学に / 大阪の。 / カイトは彼女のことを嬉しく思いました、 / しかし彼は感じました / 少し寂しく。 / 大阪は遠かったです / 彼らの町から。 / 「もし私たちが二人とも頑張れば、 / 私たちは到達できるわ / 私たちの目標に、」 / ハナはきっぱりと言いました。",
      quizzes: [
        { q: "Where is the nursing college located?", options: ["Tokyo", "Osaka", "Nagoya", "Their town"], ans: "Osaka", explanation: "The college is in Osaka." },
        { q: "How did Kaito feel about Hana's decision?", options: ["Angry", "Indifferent", "Happy but lonely", "Bored"], ans: "Happy but lonely", explanation: "He was happy for her but felt a little lonely." }
      ],
      key_phrases: [
        { phrase: "apply for ~", explanation: "〜に申し込む／志願する。大学や仕事への応募に使います。" },
        { phrase: "reach our goals", explanation: "目標に到達する。努力の末に達成することを指します。" }
      ],
      dictation_items: [
        "apply for famous nursing college",
        "happy for her but felt",
        "Osaka was far from town",
        "if we both work hard",
        "we can reach our goals"
      ],
      overlappingTips: "【コツ】ハナの力強い決意（firmly）を真似しましょう。",
      shadowingTips: "【コツ】'Nursing' の R の音をクリアに発音して。"
    },
    {
      id: 23,
      title: "The Winter Study Camp",
      script: "In December, the school held a study camp for three days. Kaito and Leo studied math and English together until 10 PM. They were exhausted, but they encouraged each other. Kaito sometimes listened to X Japan during his short breaks to stay motivated.",
      slash_script: "In December, / the school held / a study camp / for three days. / Kaito and Leo / studied math and English together / until 10 PM. / They were exhausted, / but they encouraged / each other. / Kaito sometimes listened / to X Japan / during his short breaks / to stay motivated.",
      japanese_translation: "12月に、 / 学校は開催しました / 学習合宿を / 3日間。 / カイトとレオは / 数学と英語を一緒に勉強しました / 夜10時まで。 / 彼らは疲れ果てていました、 / しかし彼らは励まし合いました / お互いに。 / カイトは時々聴きました / X Japanを / 短い休憩の間に / モチベーションを維持するために。",
      quizzes: [
        { q: "How long was the study camp?", options: ["One day", "Three days", "One week", "Two weeks"], ans: "Three days", explanation: "The camp was held for three days." },
        { q: "What did Kaito do to stay motivated?", options: ["Slept", "Ate candy", "Listened to X Japan", "Exercised"], ans: "Listened to X Japan", explanation: "He listened to X Japan during his short breaks." }
      ],
      key_phrases: [
        { phrase: "each other", explanation: "お互いに。相互の関係を表します。" },
        { phrase: "stay motivated", explanation: "モチベーションを維持する。意欲を保ち続けるという意味です。" }
      ],
      dictation_items: [
        "held a study camp for",
        "studied math and English together",
        "exhausted but they encouraged each",
        "listened to X Japan during",
        "breaks to stay motivated now"
      ],
      overlappingTips: "【コツ】勉強の疲れと連帯感を声に乗せて。",
      shadowingTips: "【コツ】'Exhausted' ［igzɔ́ːstid］の発音を正確に。"
    },
    {
      id: 24,
      title: "A Letter from the Past",
      script: "Kaito found an old letter in his guitar case. It was from his uncle, who gave him the guitar. The letter said, 'Don't let your passion die, even when life gets busy.' Kaito remembered why he first started playing. He felt a new strength inside.",
      slash_script: "Kaito found / an old letter / in his guitar case. / It was from his uncle, / who gave him the guitar. / The letter said, / 'Don't let / your passion die, / even when / life gets busy.' / Kaito remembered / why he first started playing. / He felt / a new strength inside.",
      japanese_translation: "カイトは見つけました / 古い手紙を / ギターケースの中に。 / それは彼の叔父からのものでした、 / 彼にギターをくれた（叔父）。 / その手紙にはこうありました、 / 「～させるな / 君の情熱を絶やすことを、 / たとえ～な時でも / 人生が忙しくなっても。」 / カイトは思い出しました / なぜ自分が最初に弾き始めたのかを。 / 彼は感じました / 新しい強さを、内側に。",
      quizzes: [
        { q: "Who was the letter from?", options: ["Hana", "Mr. Tanaka", "His uncle", "Leo"], ans: "His uncle", explanation: "The letter was from his uncle who gave him the guitar." },
        { q: "What did the letter say about passion?", options: ["It's not important", "Don't let it die", "Change it", "Keep it secret"], ans: "Don't let it die", explanation: "The letter said 'Don't let your passion die'." }
      ],
      key_phrases: [
        { phrase: "Don't let ~", explanation: "〜させるな。何かが起こるのを許さない、という意味です。" },
        { phrase: "remembered why ~", explanation: "なぜ〜かを思い出した。原点を振り返る時に使います。" }
      ],
      dictation_items: [
        "found an old letter in",
        "from his uncle who gave",
        "don't let your passion die",
        "even when life gets busy",
        "felt a new strength inside"
      ],
      overlappingTips: "【コツ】手紙の一文 'Don't let...' を大切に読んで。",
      shadowingTips: "【コツ】'Passion' の sh の音を逃さず真似しましょう。"
    },
    {
      id: 25,
      title: "The Snowy Roof",
      script: "One snowy night, Kaito and Hana met on the roof of a building. The city lights were beautiful. 'I'm scared of the future,' Kaito admitted. Hana took his hand and looked at the sky. 'Whatever happens, our friendship will never change,' she whispered.",
      slash_script: "One snowy night, / Kaito and Hana met / on the roof of a building. / The city lights / were beautiful. / 'I'm scared / of the future,' / Kaito admitted. / Hana took his hand / and looked at the sky. / 'Whatever happens, / our friendship / will never change / she whispered.",
      japanese_translation: "ある雪の夜、 / カイトとハナは会いました / 建物の屋上で。 / 街の明かりは / 美しかったです。 / 「僕は怖いんだ / 将来が、」 / カイトは認めました。 / ハナは彼の手を取り / そして空を見ました。 / 「何が起ころうとも、 / 私たちの友情は / 決して変わらないわ、」 / 彼女はささやきました。",
      quizzes: [
        { q: "What was Kaito scared of?", options: ["The dark", "The exams", "The future", "Hana"], ans: "The future", explanation: "Kaito admitted he was scared of the future." },
        { q: "What did Hana say about their friendship?", options: ["It might change", "It will never change", "It's a secret", "It's difficult"], ans: "It will never change", explanation: "Hana said their friendship will never change." }
      ],
      key_phrases: [
        { phrase: "be scared of ~", explanation: "〜を怖がっている。不安や恐怖を感じる状態です。" },
        { phrase: "Whatever happens", explanation: "何が起ころうとも。不確実な未来への強い決意を表します。" }
      ],
      dictation_items: [
        "on the roof of building",
        "city lights were beautiful then",
        "I'm scared of the future",
        "friendship will never change now",
        "whatever happens in our lives"
      ],
      overlappingTips: "【コツ】静かな夜の雰囲気で、優しくささやくように。",
      shadowingTips: "【コツ】'Whispered' の通り、小さな声での練習も効果的です。"
    },
    {
      id: 26,
      title: "Exam Day Morning",
      script: "The day of the exam finally arrived. Kaito woke up at 6 AM. He ate the breakfast his mother prepared. He checked his bag many times to make sure he had everything. He felt a mix of nervousness and excitement as he left the house.",
      slash_script: "The day of the exam / finally arrived. / Kaito woke up / at 6 AM. / He ate the breakfast / his mother prepared. / He checked his bag / many times / to make sure / he had everything. / He felt / a mix / of nervousness and excitement / as he left the house.",
      japanese_translation: "試験の日が / ついにやってきました。 / カイトは目を覚ましました / 午前6時に。 / 彼は朝食を食べました / 母親が準備してくれた。 / 彼はバッグをチェックしました / 何度も / 確実にするために / すべて持っていることを。 / 彼は感じました / 混ざり合ったものを / 緊張と興奮の / 彼が家を出る時。",
      quizzes: [
        { q: "What time did Kaito wake up?", options: ["5 AM", "6 AM", "7 AM", "8 AM"], ans: "6 AM", explanation: "He woke up at 6 AM on the exam day." },
        { q: "Why did he check his bag many times?", options: ["To find money", "To make sure he had everything", "To clean it", "He lost his key"], ans: "To make sure he had everything", explanation: "He wanted to be certain he didn't forget anything." }
      ],
      key_phrases: [
        { phrase: "make sure (that) ~", explanation: "確実に〜するようにする。念を入れて確認する時の表現です。" },
        { phrase: "a mix of ~", explanation: "〜の混ざり合ったもの。相反する感情などが共存する時に使います。" }
      ],
      dictation_items: [
        "The day of the exam",
        "woke up at six AM",
        "breakfast his mother prepared for",
        "make sure he had everything",
        "felt a mix of nervousness"
      ],
      overlappingTips: "【コツ】家を出る時の引き締まった気持ちで発音しましょう。",
      shadowingTips: "【コツ】'Nervousness' の長い単語のリズムに集中して。"
    },
    {
      id: 27,
      title: "Waiting for the Results",
      script: "The two weeks after the exams were the longest in Kaito's life. He couldn't focus on anything. He spent his time cleaning his room and playing the guitar. Leo called him every evening to talk about nothing. Those phone calls saved Kaito from his anxiety.",
      slash_script: "The two weeks / after the exams / were the longest / in Kaito's life. / He couldn't focus / on anything. / He spent his time / cleaning his room / and playing the guitar. / Leo called him / every evening / to talk about nothing. / Those phone calls / saved Kaito / from his anxiety.",
      japanese_translation: "2週間は / 試験の後の / 最も長かったです / カイトの人生の中で。 / 彼は集中できませんでした / 何に対しても。 / 彼は時間を過ごしました / 部屋を掃除したり / ギターを弾いたりして。 / レオが彼に電話をくれました / 毎晩 / たわいもない話をするために。 / それらの電話が / カイトを救いました / 彼の不安から。",
      quizzes: [
        { q: "How long did Kaito wait for the results?", options: ["One week", "Two weeks", "Three days", "One month"], ans: "Two weeks", explanation: "He waited for two weeks after the exams." },
        { q: "What did Leo do to help Kaito?", options: ["Gave him money", "Called him every evening", "Played guitar together", "Studied math"], ans: "Called him every evening", explanation: "Leo's casual phone calls saved Kaito from anxiety." }
      ],
      key_phrases: [
        { phrase: "focus on ~", explanation: "〜に集中する。注意を一箇所に向ける時に使います。" },
        { phrase: "talk about nothing", explanation: "たわいもない話をする。特に重要でない雑談のことです。" }
      ],
      dictation_items: [
        "longest in Kaito's life ever",
        "He couldn't focus on anything",
        "spent his time cleaning room",
        "called him every evening to",
        "saved Kaito from his anxiety"
      ],
      overlappingTips: "【コツ】'longest' を強調して、待ちきれない気持ちを表現して。",
      shadowingTips: "【コツ】'Anxiety' ［æŋzáiəti］の発音に注意。"
    },
    {
      id: 28,
      title: "The Notification",
      script: "Kaito opened the envelope with trembling hands. He stared at the paper for a long time. Finally, he shouted, 'I did it!' He had passed the entrance exam for his first-choice university. He immediately ran to Hana's house to tell her the news.",
      slash_script: "Kaito opened the envelope / with trembling hands. / He stared / at the paper / for a long time. / Finally, / he shouted, / 'I did it!' / He had passed / the entrance exam / for his first-choice university. / He immediately ran / to Hana's house / to tell her the news.",
      japanese_translation: "カイトは封筒を開けました / 震える手で。 / 彼は見つめました / その紙を / 長い間。 / ついに、 / 彼は叫びました、 / 「やったぞ！」 / 彼は合格していました / 入学試験に / 第一志望の大学の。 / 彼はすぐに走りました / ハナの家へ / 彼女にそのニュースを伝えるために。",
      quizzes: [
        { q: "How did Kaito open the envelope?", options: ["With a smile", "With trembling hands", "Quickly", "Carefully"], ans: "With trembling hands", explanation: "His hands were shaking because of nervousness." },
        { q: "What news did he tell Hana?", options: ["He was moving", "He passed the exam", "He bought a guitar", "He was sick"], ans: "He passed the exam", explanation: "He passed the exam for his first-choice university." }
      ],
      key_phrases: [
        { phrase: "I did it!", explanation: "やったぞ！／成し遂げた！ 何かを達成した時の決まり文句です。" },
        { phrase: "first-choice university", explanation: "第一志望の大学。最も行きたい大学を指します。" }
      ],
      dictation_items: [
        "opened envelope with trembling hands",
        "stared at the paper for",
        "passed the entrance exam for",
        "for his first choice university",
        "immediately ran to Hana house"
      ],
      overlappingTips: "【コツ】'I did it!' は最高に嬉しそうに叫びましょう！",
      shadowingTips: "【コツ】'Immediately' のリズムを逃さず追いかけて。"
    },
    {
      id: 29,
      title: "A Final Guitar Session",
      script: "Before graduation, the band members met in the music room one last time. They played their favorite songs for two hours. Leo played the drums harder than usual. They didn't say much, but they shared a special moment through the sound. They promised to meet again in the future.",
      slash_script: "Before graduation, / the band members met / in the music room / one last time. / They played / their favorite songs / for two hours. / Leo played the drums / harder than usual. / They didn't say much, / but they shared / a special moment / through the sound. / They promised / to meet again / in the future.",
      japanese_translation: "卒業の前に、 / バンドメンバーたちは集まりました / 音楽室に / 最後にもう一度だけ。 / 彼らは演奏しました / お気に入りの曲を / 2時間。 / レオはドラムを叩きました / いつも以上に激しく。 / 彼らは多くを語りませんでした、 / しかし彼らは共有しました / 特別な瞬間を / 音を通じて。 / 彼らは約束しました / 再会することを / 将来に。",
      quizzes: [
        { q: "How did Leo play the drums?", options: ["Quietly", "Harder than usual", "Badly", "Slowly"], ans: "Harder than usual", explanation: "He put more emotion into it than usual." },
        { q: "What did the band members promise?", options: ["To stop music", "To sell instruments", "To meet again", "To go to Osaka"], ans: "To meet again", explanation: "They promised to meet again in the future." }
      ],
      key_phrases: [
        { phrase: "one last time", explanation: "最後にもう一度。何かが終わる直前の最後の機会です。" },
        { phrase: "harder than usual", explanation: "いつも以上に。比較級を使って「いつもより激しく」を表します。" }
      ],
      dictation_items: [
        "met in the music room",
        "played favorite songs for two",
        "played drums harder than usual",
        "shared a special moment through",
        "promised to meet again in"
      ],
      overlappingTips: "【コツ】少し切ないけれど前向きな音色をイメージして。",
      shadowingTips: "【コツ】'Graduation' の語尾をはっきりと発音して。"
    },
    {
      id: 30,
      title: "Graduation Day",
      script: "The cherry blossoms were starting to bloom. Kaito stood at the school gate with his diploma. He saw Hana and Leo waving at him. He felt grateful for all the memories they made. A new journey was about to begin, but his guitar would always be by his side.",
      slash_script: "The cherry blossoms / were starting to bloom. / Kaito stood / at the school gate / with his diploma. / He saw / Hana and Leo / waving at him. / He felt grateful / for all the memories / they made. / A new journey / was about to begin, / but his guitar / would always be / by his side.",
      japanese_translation: "桜の花が / 咲き始めていました。 / カイトは立ちました / 校門に / 卒業証書を持って。 / 彼は見ました / ハナとレオが / 彼に手を振っているのを。 / 彼は感謝を感じました / すべての思い出に対して / 彼らが作った。 / 新しい旅が / まさに始まろうとしていました、 / しかし彼のギターは / いつも～でしょう / 彼のそばに（あるでしょう）。",
      quizzes: [
        { q: "Where was Kaito standing?", options: ["In the classroom", "At the school gate", "On the stage", "At the station"], ans: "At the school gate", explanation: "He stood at the school gate with his diploma." },
        { q: "How did Kaito feel about the memories?", options: ["Sad", "Angry", "Grateful", "Anxious"], ans: "Grateful", explanation: "He felt grateful for all the memories they made." }
      ],
      key_phrases: [
        { phrase: "be about to ~", explanation: "まさに〜しようとしている。直後に起こる変化を表します。" },
        { phrase: "by his side", explanation: "彼のそばに。物理的・精神的に近くにいることを指します。" }
      ],
      dictation_items: [
        "cherry blossoms starting to bloom",
        "school gate with his diploma",
        "Hana and Leo waving at",
        "grateful for all the memories",
        "new journey was about to"
      ],
      overlappingTips: "【コツ】最後の一文を、希望を込めて伸びやかに。",
      shadowingTips: "【コツ】物語の第一部の完結を美しく締めくくって。"
    },
    {
      id: 31,
      title: "The New Life in Tokyo",
      script: "Kaito moved to Tokyo to start his university life. His new apartment was small, but he felt a sense of freedom. He spent the first week buying furniture and setting up his small music corner. He missed Hana and his family, but he was ready for a new challenge.",
      slash_script: "Kaito moved to Tokyo / to start his university life. / His new apartment / was small, / but he felt / a sense of freedom. / He spent the first week / buying furniture / and setting up / his small music corner. / He missed Hana and his family, / but he was ready / for a new challenge.",
      japanese_translation: "カイトは東京へ引っ越しました / 大学生活を始めるために。 / 彼の新しいアパートは / 狭かったですが、 / しかし彼は感じました / 自由な感覚を。 / 彼は最初の週を過ごしました / 家具を買ったり / 準備をしたりして / 自分の小さな音楽コーナーの。 / 彼はハナや家族が恋しかったですが、 / しかし彼は準備ができていました / 新しい挑戦への。",
      quizzes: [
        { q: "What did Kaito set up in his room?", options: ["Kitchen", "Music corner", "Garden", "Library"], ans: "Music corner", explanation: "He set up a small music corner for his guitar." },
        { q: "How did Kaito feel in his small apartment?", options: ["Sad", "Bored", "Sense of freedom", "Angry"], ans: "Sense of freedom", explanation: "He felt a sense of freedom despite the size." }
      ],
      key_phrases: [
        { phrase: "a sense of freedom", explanation: "自由な感覚／解放感。新しい環境での開放的な気持ちです。" },
        { phrase: "be ready for ~", explanation: "〜への準備ができている。心構えができていることを表します。" }
      ],
      dictation_items: [
        "moved to Tokyo to start",
        "apartment was small but he",
        "felt a sense of freedom",
        "furniture and setting up his",
        "ready for a new challenge"
      ],
      overlappingTips: "【コツ】新生活のワクワク感を声に乗せて発音しましょう。",
      shadowingTips: "【コツ】'Freedom' の F の音をクリアに出して追いかけましょう。"
    },
    {
      id: 32,
      title: "First Day on Campus",
      script: "On the first day of university, Kaito was overwhelmed by the size of the campus. He met a lot of students from different countries. He joined an international music circle. He wanted to communicate with people through English and music. He realized that the world was much bigger than he thought.",
      slash_script: "On the first day of university, / Kaito was overwhelmed / by the size of the campus. / He met / a lot of students / from different countries. / He joined / an international music circle. / He wanted to communicate / with people / through English and music. / He realized / that the world / was much bigger / than he thought.",
      japanese_translation: "大学の初日に、 / カイトは圧倒されました / キャンパスの広さに。 / 彼は会いました / たくさんの学生に / 異なる国々からの。 / 彼は入りました / 国際的な音楽サークルに。 / 彼はコミュニケーションを取りたかったのです / 人々と / 英語と音楽を通じて。 / 彼は気づきました / 世界は / はるかに大きいということに / 彼が思っていたよりも。",
      quizzes: [
        { q: "What was Kaito overwhelmed by?", options: ["The classes", "The size of campus", "The food", "The teachers"], ans: "The size of campus", explanation: "He was surprised by how big the campus was." },
        { q: "What did Kaito realize?", options: ["He was rich", "World was much bigger", "English was easy", "He was tired"], ans: "World was much bigger", explanation: "Meeting diverse people changed his perspective." }
      ],
      key_phrases: [
        { phrase: "be overwhelmed by ~", explanation: "～に圧倒される。あまりの大きさに心が圧倒される様子です。" },
        { phrase: "than he thought", explanation: "彼が思っていたよりも。過去の予想との比較を表します。" }
      ],
      dictation_items: [
        "overwhelmed by size of campus",
        "students from different countries now",
        "joined an international music circle",
        "communicate with people through English",
        "world was much bigger than"
      ],
      overlappingTips: "【コツ】'International' のアクセントを意識して滑らかに。",
      shadowingTips: "【コツ】広大なキャンパスをイメージして、声を出し続けましょう。"
    },
    {
      id: 33,
      title: "Video Call with Hana",
      script: "Kaito and Hana had their first video call since they moved. Hana was busy with her nursing studies in Osaka. She told Kaito that she had already started her practice at a local hospital. They promised to support each other even though they were far apart.",
      slash_script: "Kaito and Hana / had their first video call / since they moved. / Hana was busy / with her nursing studies / in Osaka. / She told Kaito / that she had already started / her practice / at a local hospital. / They promised / to support each other / even though / they were far apart.",
      japanese_translation: "カイトとハナは / 初めてのビデオ通話をしました / 引っ越して以来。 / ハナは忙しかったです / 看護の勉強で / 大阪での。 / 彼女はカイトに話しました / すでに始めていたことを / 実習を / 地元の病院で。 / 彼らは約束しました / お互いを支え合うことを / たとえ～だとしても / 遠く離れていても。",
      quizzes: [
        { q: "What was Hana busy with?", options: ["Music", "Nursing studies", "Part-time job", "Traveling"], ans: "Nursing studies", explanation: "Hana is studying nursing in Osaka." },
        { q: "What did they promise during the call?", options: ["To quit", "To support each other", "To move", "To play guitar"], ans: "To support each other", explanation: "They promised to help each other through the distance." }
      ],
      key_phrases: [
        { phrase: "already started", explanation: "すでに始めた。完了の状態を強調します。" },
        { phrase: "far apart", explanation: "遠く離れて。物理的な距離が離れている様子です。" }
      ],
      dictation_items: [
        "their first video call since",
        "busy with her nursing studies",
        "already started her hospital practice",
        "promised to support each other",
        "even though they far apart"
      ],
      overlappingTips: "【コツ】ビデオ通話の親しみやすいトーンを再現しましょう。",
      shadowingTips: "【コツ】'Local hospital' の L の音を丁寧に追いかけて。"
    },
    {
      id: 34,
      title: "The Part-time Job",
      script: "To buy a new guitar amplifier, Kaito started working part-time at a record shop. His manager was very strict about organizing the CDs. However, Kaito enjoyed talking with customers about X Japan. He felt happy when he could share his passion for music.",
      slash_script: "To buy / a new guitar amplifier, / Kaito started working / part-time / at a record shop. / His manager / was very strict / about organizing the CDs. / However, / Kaito enjoyed / talking with customers / about X Japan. / He felt happy / when he could share / his passion for music.",
      japanese_translation: "買うために / 新しいギターアンプを、 / カイトは働き始めました / アルバイトとして / レコードショップで。 / 彼の店長は / とても厳しかったです / CDの整理について。 / しかしながら、 / カイトは楽しみました / 客と話すことを / X Japanについて。 / 彼は幸せを感じました / 彼が共有できたとき / 音楽への情熱を。",
      quizzes: [
        { q: "Why did Kaito start a part-time job?", options: ["To meet friends", "To buy an amplifier", "To travel", "To clean CDs"], ans: "To buy an amplifier", explanation: "He needed money for his guitar equipment." },
        { q: "How was the manager at the shop?", options: ["Kind", "Strict", "Funny", "Lazy"], ans: "Strict", explanation: "The manager was strict about work details." }
      ],
      key_phrases: [
        { phrase: "be strict about ~", explanation: "〜に厳しい。ルールや作業に対して厳しい態度を指します。" },
        { phrase: "passion for music", explanation: "音楽への情熱。強い興味や熱意を表します。" }
      ],
      dictation_items: [
        "buy a new guitar amplifier",
        "started working part time at",
        "strict about organizing the CDs",
        "talking with customers about music",
        "share his passion for music"
      ],
      overlappingTips: "【コツ】店長の厳しさと自分の情熱の対比を声に乗せて。",
      shadowingTips: "【コツ】'Amplifier' の単語のリズムを崩さずに。"
    },
    {
      id: 35,
      title: "Meeting a Rival",
      script: "In the music circle, Kaito met a guy named Ken. Ken was an amazing guitarist who had played in many contests. Kaito was shocked by Ken's skills. For the first time, he felt he was not good enough. He realized that he needed to practice much harder.",
      slash_script: "In the music circle, / Kaito met a guy / named Ken. / Ken was / an amazing guitarist / who had played / in many contests. / Kaito was shocked / by Ken's skills. / For the first time, / he felt / he was not good enough. / He realized / that he needed / to practice much harder.",
      japanese_translation: "音楽サークルで、 / カイトは一人の男に出会いました / ケンという名前の。 / ケンは / 素晴らしいギタリストでした / 何度も出場したことがある / 多くのコンテストに。 / カイトはショックを受けました / ケンの技術に。 / 初めて、 / 彼は感じました / 自分は十分ではないと。 / 彼は気づきました / ～が必要だということに / もっと一生懸命練習することが。",
      quizzes: [
        { q: "Who is Ken?", options: ["Singer", "Drummer", "Amazing guitarist", "Teacher"], ans: "Amazing guitarist", explanation: "Ken is a highly skilled player in the circle." },
        { q: "How did Kaito feel after seeing Ken?", options: ["Proud", "Happy", "Not good enough", "Angry"], ans: "Not good enough", explanation: "He felt his skills were lacking compared to Ken." }
      ],
      key_phrases: [
        { phrase: "not good enough", explanation: "十分ではない（実力不足）。自分のレベルが足りないと感じる時に使います。" },
        { phrase: "much harder", explanation: "はるかに一生懸命。比較級を強調する表現です。" }
      ],
      dictation_items: [
        "Ken was an amazing guitarist",
        "played in many contests before",
        "Kaito was shocked by skills",
        "felt he was not good",
        "needed to practice much harder"
      ],
      overlappingTips: "【コツ】悔しさを少し滲ませた、シリアスなトーンで。",
      shadowingTips: "【コツ】'Contests' や 'Skills' の複数形 S を逃さず真似して。"
    },
    {
      id: 36,
      title: "Ken's Secret",
      script: "Kaito saw Ken practicing alone in the gym late at night. Ken told Kaito, 'I'm not a genius. I just practice more than anyone else.' Kaito realized that Ken's amazing skills were a result of his hard work. Kaito decided to ask Ken to practice together.",
      slash_script: "Kaito saw Ken / practicing alone / in the gym / late at night. / Ken told Kaito, / 'I'm not a genius. / I just practice / more than anyone else.' / Kaito realized / that Ken's amazing skills / were a result / of his hard work. / Kaito decided / to ask Ken / to practice together.",
      japanese_translation: "カイトはケンを見かけました / 一人で練習しているのを / 体育館で / 夜遅くに。 / ケンはカイトに言いました、 / 「僕は天才じゃないんだ。 / 僕はただ練習しているだけさ / 誰よりも多くね。」 / カイトは気づきました / ケンの素晴らしい技術は / 結果なのだということに / 彼の努力の。 / カイトは決めました / ケンに頼むことを / 一緒に練習しようと。",
      quizzes: [
        { q: "What was Ken's secret to his skills?", options: ["Genius", "Luck", "Hard work", "A good teacher"], ans: "Hard work", explanation: "His skills came from practicing more than anyone else." },
        { q: "What did Kaito decide to do?", options: ["Quit", "Ask Ken to practice together", "Change circles", "Study math"], ans: "Ask Ken to practice together", explanation: "He wanted to learn from Ken's hard work." }
      ],
      key_phrases: [
        { phrase: "more than anyone else", explanation: "他の誰よりも。比較対象の最大値を表します。" },
        { phrase: "a result of ~", explanation: "〜の結果。何かが原因で生じた結末を指します。" }
      ],
      dictation_items: [
        "practicing alone in the gym",
        "I am not a genius",
        "practice more than anyone else",
        "result of his hard work",
        "decided to ask Ken to"
      ],
      overlappingTips: "【コツ】'Genius' ではないという謙虚さと自負を込めて。",
      shadowingTips: "【コツ】'result of his hard work' を一気に言い切りましょう。"
    },
    {
      id: 37,
      title: "The First Live in Tokyo",
      script: "The music circle decided to hold a live show at a small club in Shibuya. Kaito and Ken practiced a twin guitar solo. It was very difficult, but they made it through many rehearsals. On the day of the show, Kaito felt the same excitement he had in high school.",
      slash_script: "The music circle / decided to hold / a live show / at a small club / in Shibuya. / Kaito and Ken practiced / a twin guitar solo. / It was very difficult, / but they made it / through many rehearsals. / On the day of the show, / Kaito felt / the same excitement / he had in high school.",
      japanese_translation: "音楽サークルは / 開催することに決めました / ライブショーを / 小さなクラブで / 渋谷の。 / カイトとケンは練習しました / ツインギターのソロを。 / それは非常に難しかったです、 / しかし彼らはやり遂げました / 何度ものリハーサルを経て。 / ショーの当日に、 / カイトは感じました / 同じ興奮を / 高校時代に抱いていた（のと同じ）。",
      quizzes: [
        { q: "Where was the live show held?", options: ["Shibuya", "Shinjuku", "Osaka", "London"], ans: "Shibuya", explanation: "It was at a small club in Shibuya." },
        { q: "What did Kaito and Ken practice?", options: ["Dance", "Twin guitar solo", "Piano duet", "English speech"], ans: "Twin guitar solo", explanation: "They worked on a difficult guitar duet." }
      ],
      key_phrases: [
        { phrase: "make it through ~", explanation: "～をやり遂げる／乗り越える。困難なプロセスを終えることです。" },
        { phrase: "same excitement", explanation: "同じ興奮。以前経験したものと同じ種類の感情です。" }
      ],
      dictation_items: [
        "decided to hold a live",
        "small club in Shibuya today",
        "practiced a twin guitar solo",
        "made it through many rehearsals",
        "same excitement he had in"
      ],
      overlappingTips: "【コツ】都会での初ライブの緊張感と高揚感を声に出して。",
      shadowingTips: "【コツ】'Rehearsals'［rihə́ːrsəlz］の発音を正確に真似ましょう。"
    },
    {
      id: 38,
      title: "A Lesson from Failure",
      script: "During the live show, Kaito made a big mistake in the solo. He felt very disappointed in himself. However, after the show, Ken said, 'Mistakes happen. What matters is how you recover.' Kaito realized that failure is just another step toward success.",
      slash_script: "During the live show, / Kaito made / a big mistake / in the solo. / He felt / very disappointed / in himself. / However, / after the show, / Ken said, / 'Mistakes happen. / What matters is / how you recover.' / Kaito realized / that failure / is just another step / toward success.",
      japanese_translation: "ライブショーの間に、 / カイトはしてしまいました / 大きなミスを / ソロで。 / 彼は感じました / とても失望を / 自分自身に対して。 / しかしながら、 / ショーの後で、 / ケンは言いました、 / 「ミスは起こるものさ。 / 重要なのは / どう立ち直るかだよ。」 / カイトは気づきました / 失敗とは / 単なるもう一歩なのだということに / 成功への。",
      quizzes: [
        { q: "What happened to Kaito during the solo?", options: ["He was perfect", "He made a big mistake", "He forgot the song", "He broke his guitar"], ans: "He made a big mistake", explanation: "He made a significant error during his solo performance." },
        { q: "What did Ken say was important?", options: ["Practice", "How you recover", "Don't fail", "Buying a new guitar"], ans: "How you recover", explanation: "What matters is the ability to recover from mistakes." }
      ],
      key_phrases: [
        { phrase: "disappointed in ~", explanation: "〜に失望して。期待外れだった時の落胆です。" },
        { phrase: "What matters is ~", explanation: "重要なのは～だ。核心となる部分を強調する表現です。" }
      ],
      dictation_items: [
        "made a big mistake in",
        "felt very disappointed in himself",
        "Mistakes happen Ken said to",
        "What matters is how you",
        "just another step toward success"
      ],
      overlappingTips: "【コツ】失敗を乗り越える力強い教訓として読み上げましょう。",
      shadowingTips: "【コツ】'Success' の S の音をしっかり響かせて。"
    },
    {
      id: 39,
      title: "Summer Reunion",
      script: "In August, Kaito returned to his hometown for the first time. He met Hana and Leo at their favorite cafe. They talked about their new lives for hours. Kaito felt that their bond was stronger than ever. They visited their old high school and remembered their dreams.",
      slash_script: "In August, / Kaito returned / to his hometown / for the first time. / He met / Hana and Leo / at their favorite cafe. / They talked / about their new lives / for hours. / Kaito felt / that their bond / was stronger than ever. / They visited / their old high school / and remembered their dreams.",
      japanese_translation: "8月に、 / カイトは戻りました / 自分の故郷に / 初めて。 / 彼は会いました / ハナとレオに / 彼らのお気に入りのカフェで。 / 彼らは話しました / 自分たちの新しい生活について / 何時間も。 / カイトは感じました / 彼らの絆が / かつてないほど強いと。 / 彼らは訪れました / 自分たちの古い高校を / そして自分たちの夢を思い出しました。",
      quizzes: [
        { q: "Who did Kaito meet in August?", options: ["Mr. Tanaka", "Hana and Leo", "His parents", "Ken"], ans: "Hana and Leo", explanation: "He met his friends from high school." },
        { q: "Where did they visit together?", options: ["Beach", "Osaka", "Old high school", "Music club"], ans: "Old high school", explanation: "They revisited their high school where they met." }
      ],
      key_phrases: [
        { phrase: "for the first time", explanation: "初めて。過去に例がないことを強調します。" },
        { phrase: "stronger than ever", explanation: "かつてないほど強い。以前のどの時点よりも強いことを表します。" }
      ],
      dictation_items: [
        "returned to his hometown for",
        "met Hana and Leo at",
        "talked about their new lives",
        "their bond was stronger than",
        "remembered their dreams of future"
      ],
      overlappingTips: "【コツ】旧友との再会の喜びを込めて、明るいトーンで。",
      shadowingTips: "【コツ】'Hometown' のアクセントをはっきりと追いかけましょう。"
    },
    {
      id: 40,
      title: "Determined to Move Forward",
      script: "As Kaito took the train back to Tokyo, he looked at his guitar. He had experienced both success and failure in the big city. He was determined to practice more and become a guitarist like Hide from X Japan. His journey in Tokyo was just beginning.",
      slash_script: "As Kaito took the train / back to Tokyo, / he looked / at his guitar. / He had experienced / both success and failure / in the big city. / He was determined / to practice more / and become a guitarist / like Hide from X Japan. / His journey in Tokyo / was just beginning.",
      japanese_translation: "カイトが電車に乗って / 東京へ戻る時、 / 彼は見ました / 自分のギターを。 / 彼は経験しました / 成功と失敗の両方を / 大都会で。 / 彼は決心していました / もっと練習して / ギタリストになることを / X JapanのHideのような。 / 彼の東京での旅は / 始まったばかりでした。",
      quizzes: [
        { q: "Who is Kaito's role model?", options: ["Hide from X Japan", "Ken", "Mr. Tanaka", "Hana"], ans: "Hide from X Japan", explanation: "He wants to be like Hide." },
        { q: "What had he experienced in Tokyo?", options: ["Success", "Failure", "Success and failure", "Nothing"], ans: "Success and failure", explanation: "He had both positive and negative experiences." }
      ],
      key_phrases: [
        { phrase: "be determined to ~", explanation: "～することを固く決心している。強い意欲を持って決めたことです。" },
        { phrase: "was just beginning", explanation: "始まったばかりだった。物語や冒険の序盤であることを示します。" }
      ],
      dictation_items: [
        "took the train back to",
        "experienced both success and failure",
        "determined to practice much more",
        "guitarist like Hide from X",
        "journey in Tokyo just beginning"
      ],
      overlappingTips: "【コツ】最後の一文 'was just beginning' を力強く発音しましょう。",
      shadowingTips: "【コツ】前向きな決意を胸に、一音一音を正確に追いかけてください。"
    },
    {
      id: 41,
      title: "The Major Debut Chance",
      script: "One day, a scout from a famous record label visited the circle's performance. He invited Kaito and Ken to participate in a big audition for new artists. Kaito felt a mix of pressure and joy. He knew this could be the chance of a lifetime.",
      slash_script: "One day, / a scout / from a famous record label / visited the circle's performance. / He invited Kaito and Ken / to participate in / a big audition / for new artists. / Kaito felt / a mix of pressure and joy. / He knew / this could be / the chance of a lifetime.",
      japanese_translation: "ある日、 / スカウトが / 有名なレコードレーベルからの / サークルの演奏を訪れました。 / 彼はカイトとケンを誘いました / 参加するようにと / 大きなオーディションに / 新人アーティストのための。 / カイトは感じました / プレッシャーと喜びが混ざり合ったものを。 / 彼は分かっていました / これが～かもしれないと / 一生に一度のチャンス（になるかもしれないと）。",
      quizzes: [
        { q: "What were Kaito and Ken invited to?", options: ["Audit", "Audition", "Party", "School"], ans: "Audition", explanation: "They were invited to a big audition for new artists." },
        { q: "How did Kaito feel about the news?", options: ["Pressure and joy", "Bored", "Angry", "Sad"], ans: "Pressure and joy", explanation: "He felt a combination of positive and stressful emotions." }
      ],
      key_phrases: [
        { phrase: "participate in ~", explanation: "～に参加する。イベントや活動に加わる時の公式な表現です。" },
        { phrase: "chance of a lifetime", explanation: "一生に一度のチャンス。滅多にない絶好の機会を指します。" }
      ],
      dictation_items: [
        "scout from a famous record",
        "participate in a big audition",
        "audition for new artists today",
        "mix of pressure and joy",
        "be the chance of lifetime"
      ],
      overlappingTips: "【コツ】'chance of a lifetime' に期待を込めて発音しましょう。",
      shadowingTips: "【コツ】'Participate' ［pɑrtísəpèit］の音節を意識して追いかけて。"
    },
    {
      id: 42,
      title: "Hard Decisions",
      script: "The audition was scheduled for the same day as Kaito's final exams. He had to choose between his studies and his dream. He remembered his uncle's letter. 'If I don't take this risk, I will regret it forever,' Kaito told himself.",
      slash_script: "The audition was scheduled / for the same day / as Kaito's final exams. / He had to choose / between his studies / and his dream. / He remembered / his uncle's letter. / 'If I don't take / this risk, / I will regret it / forever,' / Kaito told himself.",
      japanese_translation: "オーディションは予定されていました / 同じ日に / カイトの期末試験と。 / 彼は選ばなければなりませんでした / 勉強と / 夢のどちらかを。 / 彼は思い出しました / 叔父の手紙を。 / 「もし僕が取らなければ / このリスクを、 / 僕は後悔するだろう / 永遠に」 / カイトは自分自身に言いました。",
      quizzes: [
        { q: "What was the conflict on the audition day?", options: ["Hana's birthday", "Final exams", "Music show", "Trip"], ans: "Final exams", explanation: "The audition was on the same day as his exams." },
        { q: "What did he decide to do?", options: ["Take the exam", "Take the risk", "Quit music", "Go to Osaka"], ans: "Take the risk", explanation: "He chose the audition over the exams to follow his dream." }
      ],
      key_phrases: [
        { phrase: "between A and B", explanation: "AとBの間で。選択肢や場所の間に使われます。" },
        { phrase: "take a risk", explanation: "リスクを取る。危険を承知で挑戦するという意味です。" }
      ],
      dictation_items: [
        "scheduled for the same day",
        "between his studies and dream",
        "remembered his uncle's old letter",
        "don't take this big risk",
        "I will regret it forever"
      ],
      overlappingTips: "【コツ】究極の選択を迫られた苦悩と決意を声に出して。",
      shadowingTips: "【コツ】'Scheduled' ［skédʒuːld］の発音を滑らかに真似して。"
    },
    {
      id: 43,
      title: "The Intense Training",
      script: "Kaito and Ken spent every waking hour practicing for the audition. They wanted to create a sound that nobody had ever heard before. Ken was strict, but Kaito didn't mind. They were both chasing the same star in the dark night.",
      slash_script: "Kaito and Ken spent / every waking hour / practicing / for the audition. / They wanted to create / a sound / that nobody / had ever heard before. / Ken was strict, / but Kaito didn't mind. / They were both chasing / the same star / in the dark night.",
      japanese_translation: "カイトとケンは過ごしました / 起きている時間すべてを / 練習することに / オーディションのために。 / 彼らは作りたかったのです / 音を / 誰も / かつて聞いたことがない（ような音を）。 / ケンは厳しかったです、 / しかしカイトは気にしませんでした。 / 彼らは二人とも追いかけていました / 同じ星を / 暗い夜空の中で。",
      quizzes: [
        { q: "How much did they practice?", options: ["1 hour", "Every waking hour", "Weekends", "3 hours"], ans: "Every waking hour", explanation: "They spent all their time practicing." },
        { q: "What kind of sound did they want?", options: ["Traditional", "Sound nobody ever heard", "Loud", "Fast"], ans: "Sound nobody ever heard", explanation: "They aimed for a unique, new sound." }
      ],
      key_phrases: [
        { phrase: "every waking hour", explanation: "起きている間ずっと。全ての時間を費やすほどの没頭を表します。" },
        { phrase: "didn't mind", explanation: "気にしなかった。嫌だとは思わなかった、という意味です。" }
      ],
      dictation_items: [
        "spent every waking hour practicing",
        "sound that nobody had ever",
        "heard before the big audition",
        "Ken strict but Kaito didn't",
        "chasing the same star tonight"
      ],
      overlappingTips: "【コツ】'nobody had ever heard before' を一気に滑らかに。",
      shadowingTips: "【コツ】練習の激しさを表すように、スピード感を維持して。"
    },
    {
      id: 44,
      title: "Hana's Surprise Visit",
      script: "A week before the audition, Hana suddenly appeared at Kaito's door. She had traveled all the way from Osaka to support him. She brought a lucky charm from a famous shrine. 'You can do it, Kaito. Believe in your music,' she said with a smile.",
      slash_script: "A week before the audition, / Hana suddenly appeared / at Kaito's door. / She had traveled / all the way / from Osaka / to support him. / She brought / a lucky charm / from a famous shrine. / 'You can do it, Kaito. / Believe / in your music,' / she said with a smile.",
      japanese_translation: "オーディションの1週間前、 / ハナが突然現れました / カイトのドアの前に。 / 彼女は旅をしてきました / はるばる / 大阪から / 彼を応援するために。 / 彼女は持ってきました / お守りを / 有名な神社からの。 / 「あなたならできるわ、カイト. / 信じて / あなたの音楽を」 / 彼女は微笑んで言いました。",
      quizzes: [
        { q: "Where did Hana come from?", options: ["Osaka", "Tokyo", "London", "Hometown"], ans: "Osaka", explanation: "She traveled from Osaka to visit him." },
        { q: "What did she bring him?", options: ["Money", "Guitar", "Lucky charm", "Food"], ans: "Lucky charm", explanation: "She brought a lucky charm for success." }
      ],
      key_phrases: [
        { phrase: "all the way from ~", explanation: "～からはるばる。遠い距離を移動してきたことを強調します。" },
        { phrase: "believe in ~", explanation: "～を信じる。能力や価値を信頼するという意味です。" }
      ],
      dictation_items: [
        "week before the audition day",
        "suddenly appeared at Kaito door",
        "traveled all the way from",
        "lucky charm from famous shrine",
        "believe in your music Kaito"
      ],
      overlappingTips: "【コツ】ハナのセリフは明るく、希望に満ちた声で。",
      shadowingTips: "【コツ】'Shrine' ［ʃráin］の SH の音を丁寧に出して。"
    },
    {
      id: 45,
      title: "The Audition Hall",
      script: "The audition hall was huge and filled with tension. Many talented musicians were waiting for their turn. When Kaito stepped onto the stage, the bright lights blinded him for a moment. He took a deep breath and touched the strings of his guitar.",
      slash_script: "The audition hall / was huge / and filled with tension. / Many talented musicians / were waiting / for their turn. / When Kaito stepped / onto the stage, / the bright lights / blinded him / for a moment. / He took / a deep breath / and touched the strings / of his guitar.",
      japanese_translation: "オーディション会場は / 巨大で / 緊張感に満ちていました。 / 多くの才能あるミュージシャンたちが / 待っていました / 自分の番を。 / カイトが踏み出したとき / ステージの上に、 / まぶしい光が / 彼の目をくらませました / 一瞬の間。 / 彼はしました / 深呼吸を / そして弦に触れました / 自分のギターの。",
      quizzes: [
        { q: "How was the atmosphere in the hall?", options: ["Relaxed", "Filled with tension", "Boring", "Cold"], ans: "Filled with tension", explanation: "The hall was huge and very tense." },
        { q: "What did Kaito do before playing?", options: ["Slept", "Deep breath and touched strings", "Laughed", "Ran away"], ans: "Deep breath and touched strings", explanation: "He prepared himself physically and mentally." }
      ],
      key_phrases: [
        { phrase: "filled with ~", explanation: "～で満たされている。感情や雰囲気でいっぱいの状態です。" },
        { phrase: "take a deep breath", explanation: "深呼吸をする。心を落ち着かせる時の動作です。" }
      ],
      dictation_items: [
        "hall huge and filled with",
        "talented musicians waiting for turn",
        "bright lights blinded him for",
        "took a deep breath before",
        "touched strings of his guitar"
      ],
      overlappingTips: "【コツ】'huge' や 'tension' の響きを大切に。重厚なトーンで。",
      shadowingTips: "【コツ】'took a deep breath' のところで実際に息を吸う間を入れて。"
    },
    {
      id: 46,
      title: "The Perfect Performance",
      script: "Kaito and Ken played their original song with everything they had. Their guitars sounded like they were talking to each other. The judges stayed quiet, watching every move. For Kaito, it was the best five minutes of his life. He felt as if he were flying.",
      slash_script: "Kaito and Ken played / their original song / with everything they had. / Their guitars sounded / like they were talking / to each other. / The judges stayed quiet, / watching / every move. / For Kaito, / it was the best / five minutes / of his life. / He felt / as if / he were flying.",
      japanese_translation: "カイトとケンは演奏しました / 自分たちのオリジナル曲を / 持てる力のすべてを尽くして。 / 彼らのギターは響きました / まるで話をしているかのように / お互いに。 / 審査員たちは静かなままでした、 / 見守りながら / あらゆる動きを。 / カイトにとって、 / それは最高でした / 5分間（だったのです） / 彼の人生の中で。 / 彼は感じました / まるで / 自分が空を飛んでいるかのように。",
      quizzes: [
        { q: "How long was their performance?", options: ["2 mins", "5 mins", "10 mins", "1 hour"], ans: "5 mins", explanation: "It was the best five minutes of his life." },
        { q: "How did Kaito feel during the show?", options: ["As if he were flying", "Sad", "Tired", "Bored"], ans: "As if he were flying", explanation: "He felt an incredible sense of freedom." }
      ],
      key_phrases: [
        { phrase: "with everything they had", explanation: "持てる全てを尽くして。全力を振り絞る様子です。" },
        { phrase: "as if he were ~", explanation: "まるで～であるかのように。事実に反する例え（仮定法）です。" }
      ],
      dictation_items: [
        "original song with everything they",
        "guitars sounded like they were",
        "talking to each other now",
        "judges stayed quiet watching every",
        "felt as if he were"
      ],
      overlappingTips: "【コツ】'as if he were flying' を最高に気持ちよさそうに。",
      shadowingTips: "【コツ】'Judges' ［dʒʌ́dʒiz］の複数形の発音を正確に真似て。"
    },
    {
      id: 47,
      title: "The Result and the Promise",
      script: "A few days later, the result arrived. Kaito and Ken had won the audition! They were offered a contract to release their first single. However, the label asked them to move to London for recording. Kaito promised Hana that he would become a global artist.",
      slash_script: "A few days later, / the result arrived. / Kaito and Ken / had won the audition! / They were offered / a contract / to release / their first single. / However, / the label asked them / to move to London / for recording. / Kaito promised Hana / that he would become / a global artist.",
      japanese_translation: "数日後、 / 結果が届きました。 / カイトとケンは / オーディションに勝ったのです！ / 彼らはオファーされました / 契約を / リリースするための / 彼らのファーストシングルを。 / しかしながら、 / レーベルは彼らに頼みました / ロンドンへ移るようにと / レコーディングのために。 / カイトはハナに約束しました / 自分が～になると / 世界的なアーティストに（なると）。",
      quizzes: [
        { q: "What was the audition result?", options: ["Failed", "Won", "Draw", "Cancelled"], ans: "Won", explanation: "Kaito and Ken won the audition." },
        { q: "Where were they asked to move?", options: ["Osaka", "New York", "London", "Paris"], ans: "London", explanation: "The label asked them to move to London for recording." }
      ],
      key_phrases: [
        { phrase: "a few days later", explanation: "数日後。時間の経過を表す一般的な表現です。" },
        { phrase: "release their first single", explanation: "ファーストシングルを発売する。音楽業界の専門表現です。" }
      ],
      dictation_items: [
        "few days later result arrived",
        "offered a contract to release",
        "release their first single soon",
        "move to London for recording",
        "become a famous global artist"
      ],
      overlappingTips: "【コツ】'London' という言葉に新しい世界への期待を込めて。",
      shadowingTips: "【コツ】'Contract' ［kɑ́ntrækt］のアクセントをはっきりと。"
    },
    {
      id: 48,
      title: "Departure",
      script: "The day to leave for London came. At the airport, Hana and Leo came to say goodbye. 'Don't forget us when you become famous,' Leo joked, but his eyes were wet. Kaito hugged them tightly. He knew this was the start of a long journey far away.",
      slash_script: "The day / to leave for London / came. / At the airport, / Hana and Leo / came to say goodbye. / 'Don't forget us / when you become famous,' / Leo joked, / but his eyes were wet. / Kaito hugged them / tightly. / He knew / this was the start / of a long journey / far away.",
      japanese_translation: "その日が / ロンドンへ出発するための / ややってきました。 / 空港で、 / ハナとレオが / さよならを言いに来ました。 / 「僕たちのことを忘れるなよ / 有名になっても、」 / レオは冗談を言いました、 / しかし彼の目は濡れていました。 / カイトは彼らを抱きしめました / きつく. / 彼は分かっていました / これが始まりだということを / 長い旅の / 遠く離れた地での。",
      quizzes: [
        { q: "Who came to the airport?", options: ["Mr. Tanaka", "Hana and Leo", "Mother", "Ken"], ans: "Hana and Leo", explanation: "His best friends came to say goodbye." },
        { q: "What did Leo do while joking?", options: ["Laughed", "Cried (eyes wet)", "Danced", "Slept"], ans: "Cried (eyes wet)", explanation: "He was sad but tried to be funny." }
      ],
      key_phrases: [
        { phrase: "leave for ~", explanation: "～に向けて出発する。目的地を目指す時の表現です。" },
        { phrase: "hug tightly", explanation: "きつく抱きしめる。別れを惜しむ様子を表します。" }
      ],
      dictation_items: [
        "day to leave for London",
        "came to say goodbye today",
        "when you become famous Leo",
        "hugged them tightly at airport",
        "start of a long journey"
      ],
      overlappingTips: "【コツ】別れの切なさと友情を声の響きに込めて。",
      shadowingTips: "【コツ】'Famous' ［féiməs］の F と M を丁寧に追いかけて。"
    },
    {
      id: 49,
      title: "London Rain",
      script: "In London, it was raining. Kaito stood in front of the legendary studio. He missed the cherry blossoms of Japan, but he felt his uncle's guitar in his hand. He was no longer a shy high school boy. He was a musician ready to change the world.",
      slash_script: "In London, / it was raining. / Kaito stood / in front of / the legendary studio. / He missed / the cherry blossoms / of Japan, / but he felt / his uncle's guitar / in his hand. / He was / no longer / a shy high school boy. / He was a musician / ready / to change the world.",
      japanese_translation: "ロンドンでは、 / 雨が降っていました。 / カイトは立ちました / 前に / 伝説的なスタジオの。 / 彼は恋しく思いました / 桜の花を / 日本の、 / しかし彼は感じました / 叔父のギターを / 自分の手の中に。 / 彼は / もはや～ではありませんでした / 内気な高校生（ではありませんでした）。 / 彼はミュージシャンでした / 準備ができている / 世界を変えるための。",
      quizzes: [
        { q: "What was the weather like in London?", options: ["Snowy", "Sunny", "Raining", "Hot"], ans: "Raining", explanation: "In London, it was raining." },
        { q: "What was Kaito ready for?", options: ["Going home", "Change the world", "Buying shoes", "Sleeping"], ans: "Change the world", explanation: "He was confident and ready to make an impact." }
      ],
      key_phrases: [
        { phrase: "no longer ~", explanation: "もはや～ではない。過去の状態が完全に終わったことを示します。" },
        { phrase: "ready to ~", explanation: "～する準備ができている。強い意欲を伴う準備完了の状態です。" }
      ],
      dictation_items: [
        "stood in front of legendary",
        "missed cherry blossoms of Japan",
        "felt his uncle guitar in",
        "no longer a shy boy",
        "ready to change the world"
      ],
      overlappingTips: "【コツ】'Ready to change the world' を自信に満ちた声で。",
      shadowingTips: "【コツ】'Legendary' ［lédʒəndèri］のリズムを真似して。"
    },
    {
      id: 50,
      title: "Endless Hope",
      script: "Kaito started playing the piano intro of his song. He thought about Hana in Osaka, Leo in the music room, and the blue sky of his hometown. His music was a bridge connecting everyone. Kaito's story would continue forever, filled with endless hope and music.",
      slash_script: "Kaito started playing / the piano intro / of his song. / He thought about / Hana in Osaka, / Leo in the music room, / and the blue sky / of his hometown. / His music / was a bridge / connecting everyone. / Kaito's story / would continue forever, / filled with / endless hope and music.",
      japanese_translation: "カイトは弾き始めました / 自分の曲のピアノのイントロを。 / 彼は～について思いました / 大阪にいるハナや、 / 音楽室にいるレオ、 / そして故郷の青い空のことを。 / 彼の音楽は / 架け橋でした / みんなを繋ぐ。 / カイトの物語は / これからも続くでしょう / 永遠に、 / 満たされながら / 無限の希望と音楽で。",
      quizzes: [
        { q: "What was his music compared to?", options: ["Bridge", "River", "Wall", "Fence"], ans: "Bridge", explanation: "His music was a bridge connecting everyone." },
        { q: "How would Kaito's story continue?", options: ["Sadness", "Hope and music", "Hard work", "Exams"], ans: "Hope and music", explanation: "It ends with endless hope and music." }
      ],
      key_phrases: [
        { phrase: "thought about ~", explanation: "～について考えた（思いを馳せた）。大切なものを思い浮かべる様子です。" },
        { phrase: "bridge connecting everyone", explanation: "みんなを繋ぐ架け橋。音楽の力を象徴する比喩です。" }
      ],
      dictation_items: [
        "playing the piano intro of",
        "thought about Hana and Leo",
        "music was a bridge connecting",
        "story would continue forever and",
        "filled with endless hope music"
      ],
      overlappingTips: "【コツ】物語の完結です！最高にエモーショナルに、未来への希望を込めて。",
      shadowingTips: "【コツ】最後を完璧に追いかけて、やり遂げた達成感を味わいましょう。"
    }
  ]
};
