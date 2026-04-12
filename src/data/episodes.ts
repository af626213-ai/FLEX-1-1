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

export type VocabQuestion = {
  word: string;
  meaning: string;
  options: string[];
};

export type Episode = {
  id: number;
  title: string;
  script: string;
  slash_script?: string;
  japanese_translation?: string;
  quizzes: QuizQuestion[];
  vocab_quizzes: VocabQuestion[];
  key_phrases: KeyPhrase[];
  dictation_items: string[];
  overlappingTips?: string;
  shadowingTips?: string;
};

export type CourseData = {
  course_title: string;
  episodes: Episode[];
};

// --- 実データ ---
export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    // --- Lesson 1: Who is Shuzo Matsuoka? ---
    {
      id: 1,
      title: "Who is Shuzo Matsuoka?",
      script: "Hello, everyone. I am Matsuoka Shuzo. I was a professional tennis player about thirty years ago. Now I am a sportscaster and tell everyone about the great world of sports. By the way, what is your image of me? You may think of such words as 'passion,' 'spirit,' or 'cheer.' But I am not that kind of person. I am a negative person. So, I always try to support myself with positive words of encouragement.",
      slash_script: "Hello, everyone. / I am Matsuoka Shuzo. / I was a professional tennis player / about thirty years ago. / Now I am a sportscaster / and tell everyone / about the great world of sports. / By the way, / what is your image of me? / You may think of such words as / 'passion,' 'spirit,' or 'cheer.' / But I am not / that kind of person. / I am a negative person. / So, I always try / to support myself / with positive words of encouragement.",
      japanese_translation: "みなさん、こんにちは。 / 私は松岡修造です。 / 私はプロテニスプレーヤーでした / 約30年前に。 / 今はスポーツキャスターです / そしてみんなに伝えています / スポーツの素晴らしい世界について。 / ところで、 / 私のイメージはどんなものですか？ / あなたは～のような言葉を思い浮かべるかもしれません / 「情熱」「精神」「応援」。 / でも、私は～ではありません / そういう種類の人間（ではありません）。 / 私はネガティブな人間なのです。 / だから、私はいつも～するようにしています / 自分自身を支える（ように） / 前向きな励ましの言葉で。",
      quizzes: [
        { q: "What was Shuzo's job thirty years ago?", options: ["Sportscaster", "Professional tennis player", "Teacher", "Coach"], ans: "Professional tennis player", explanation: "The script says he was a professional tennis player about thirty years ago." },
        { q: "How does Shuzo describe his own personality?", options: ["Always positive", "A negative person", "Very angry", "Lazy"], ans: "A negative person", explanation: "Surprisingly, he says, 'I am a negative person.'" }
      ],
      vocab_quizzes: [
        { word: "professional", meaning: "プロの", options: ["プロの", "アマチュアの", "有名な", "引退した"] },
        { word: "sportscaster", meaning: "スポーツキャスター", options: ["審判", "解説者", "スポーツキャスター", "記者"] },
        { word: "passion", meaning: "情熱", options: ["冷静", "情熱", "勇気", "希望"] },
        { word: "negative", meaning: "消極的な", options: ["積極的な", "消極的な", "怒りっぽい", "悲しい"] },
        { word: "encouragement", meaning: "励まし", options: ["批判", "命令", "励まし", "驚き"] }
      ],
      key_phrases: [
        { phrase: "tell A about B", explanation: "「AにBについて伝える」。情報を共有する時の基本形です。" },
        { phrase: "such words as ~", explanation: "「～のような言葉」。具体例を挙げる時に使います。" }
      ],
      dictation_items: ["a professional tennis player about", "tell everyone about the great", "what is your image of", "not that kind of person", "with positive words of encouragement"],
      overlappingTips: "【コツ】自己紹介の部分はハキハキと。'negative' という意外な言葉を強調してみましょう。",
      shadowingTips: "【コツ】修造さんの情熱的な話し方をイメージして、リズムよく追いかけましょう。"
    },
    {
      id: 2,
      title: "It is Good to be Nervous!",
      script: "Are you often nervous during a test or a presentation? That is not a bad thing. You are nervous because you care about the results. That means that you are serious. You do not want to fail. You want to do well. Be glad that you are worried and change that feeling into something positive. Then, give 120% to achieve your goal!",
      slash_script: "Are you often nervous / during a test / or a presentation? / That is not a bad thing. / You are nervous / because you care / about the results. / That means that / you are serious. / You do not want to fail. / You want to do well. / Be glad / that you are worried / and change that feeling / into something positive. / Then, give 120% / to achieve your goal!",
      japanese_translation: "あなたはよく緊張しますか？ / テストの間に / あるいはプレゼンテーション（の間に）？ / それは悪いことではありません。 / あなたが緊張するのは / ～だからです / あなたが結果を気にしている（から）。 / それは～ということを意味します / あなたが真剣だという（ことを）。 / あなたは失敗したくありません。 / あなたはうまくいってほしいと思っています。 / 喜びなさい / あなたが悩んでいることを / そしてその気持ちを変えなさい / 何かポジティブなものに。 / それから、120％を出しなさい / あなたの目標を達成するために！",
      quizzes: [
        { q: "Why does Shuzo say it is okay to be nervous?", options: ["Because it's funny", "Because you care about the results", "Because everyone is lazy", "Because tests are easy"], ans: "Because you care about the results", explanation: "Being nervous means you are serious about your success." },
        { q: "How much effort should you give according to Shuzo?", options: ["50%", "80%", "100%", "120%"], ans: "120%", explanation: "He encourages us to give '120%' to achieve our goals." }
      ],
      vocab_quizzes: [
        { word: "nervous", meaning: "緊張して", options: ["緊張して", "怒って", "退屈して", "興奮して"] },
        { word: "presentation", meaning: "発表", options: ["授業", "発表", "宿題", "会話"] },
        { word: "result", meaning: "結果", options: ["過程", "理由", "結果", "目標"] },
        { word: "serious", meaning: "真剣な", options: ["真剣な", "面白い", "悲しい", "静かな"] },
        { word: "achieve", meaning: "達成する", options: ["達成する", "諦める", "探す", "忘れる"] }
      ],
      key_phrases: [
        { phrase: "care about ~", explanation: "「～を気にかける／大切に思う」。結果を重視している状態です。" },
        { phrase: "change A into B", explanation: "「AをBに変える」。ネガティブな感情をポジティブに変えるという文脈です。" }
      ],
      dictation_items: ["often nervous during a test", "because you care about the", "means that you are serious", "change that feeling into something", "give one hundred twenty percent"],
      overlappingTips: "【コツ】'give 120%!' の部分は力強く。自分を鼓舞するように発音しましょう。",
      shadowingTips: "【コツ】'Presentation' や 'Serious' など、アクセントの位置に気をつけて追いかけましょう。"
    },
    {
      id: 3,
      title: "The Power of a Smile",
      script: "Many people can’t smile when they are having a hard time. But that is the most important time to try to smile. A smile will have a good effect on you. It will also be good for the people around you. It is a way to bring cheer into people’s lives. Say loudly with a smile, 'Next time, I’ll succeed!' If you say to yourself, 'I can do it,' your heart and body will believe you.",
      slash_script: "Many people can’t smile / when they are having / a hard time. / But that is / the most important time / to try to smile. / A smile / will have a good effect / on you. / It will also be good / for the people around you. / It is a way / to bring cheer / into people’s lives. / Say loudly with a smile, / 'Next time, I’ll succeed!' / If you say to yourself, / 'I can do it,' / your heart and body / will believe you.",
      japanese_translation: "多くの人は笑顔になれません / ～なとき / 辛い思いをしている（とき）。 / でも、それこそが / 最も重要な時なのです / 笑顔になろうとする。 / 笑顔は / 良い効果をもたらすでしょう / あなたに。 / それはまた良いことでしょう / あなたの周りの人々にとっても。 / それは～するための方法です / 元気をもたらす（ための） / 人々の生活に。 / 笑顔で大きな声で言いなさい / 「次は成功するぞ！」と。 / もしあなたが自分自身に言えば / 「自分ならできる」と / あなたの心と体は / あなたを信じるでしょう。",
      quizzes: [
        { q: "When is the most important time to smile?", options: ["When you win", "When you are having a hard time", "When you eat lunch", "When you are sleeping"], ans: "When you are having a hard time", explanation: "He says a hard time is the most important time to try to smile." },
        { q: "What happens if you say 'I can do it' to yourself?", options: ["You will get tired", "Your heart and body will believe you", "People will laugh", "Nothing changes"], ans: "Your heart and body will believe you", explanation: "Positive self-talk affects both your mind and body." }
      ],
      vocab_quizzes: [
        { word: "important", meaning: "重要な", options: ["簡単な", "重要な", "新しい", "面白い"] },
        { word: "effect", meaning: "効果", options: ["原因", "効果", "努力", "目的"] },
        { word: "around", meaning: "周りの", options: ["遠くの", "周りの", "反対の", "上の"] },
        { word: "succeed", meaning: "成功する", options: ["成功する", "失敗する", "準備する", "練習する"] },
        { word: "believe", meaning: "信じる", options: ["疑う", "信じる", "忘れる", "助ける"] }
      ],
      key_phrases: [
        { phrase: "have a good effect on ~", explanation: "「～に良い効果を与える」。影響を及ぼす際の定番表現です。" },
        { phrase: "say to oneself", explanation: "「心の中で思う／自分に言い聞かせる」。自問自答の表現です。" }
      ],
      dictation_items: ["when they are having a", "the most important time to", "good for the people around", "bring cheer into people lives", "your heart and body will"],
      overlappingTips: "【コツ】'Next time, I’ll succeed!' は、実際に笑顔を作って発音すると声のトーンが変わります。",
      shadowingTips: "【コツ】'Effect' や 'Believe' の語尾の響きまで丁寧に追いかけましょう。"
    },
    {
      id: 4,
      title: "New Worlds Will Open",
      script: "Sometimes, it may be hard to say 'thank you.' But we should feel thankful to those people. If it is difficult, you should just thank the people in your heart. In your school life, you may face some difficulties. To study and to do club activities may be stressful. But these experiences will help you become stronger. When life is hard, believe in yourself. Then new worlds will open for you. Good luck to you all!",
      slash_script: "Sometimes, / it may be hard / to say 'thank you.' / But we should feel thankful / to those people. / If it is difficult, / you should just thank / the people in your heart. / In your school life, / you may face / some difficulties. / To study / and to do club activities / may be stressful. / But these experiences / will help you / become stronger. / When life is hard, / believe in yourself. / Then new worlds / will open for you. / Good luck to you all!",
      japanese_translation: "時々 / ～は難しいかもしれません / 「ありがとう」と言うことは。 / でも、私たちは感謝すべきです / そうした人々に。 / もしそれが難しければ / あなたはただ感謝すればよいのです / 心の中でその人たちに。 / 学校生活では / あなたは直面するかもしれません / いくつかの困難に。 / 勉強することや部活動をすることは / ストレスがたまるかもしれません。 / でも、これらの経験は / あなたを助けるでしょう / より強くなる（ことを）。 / 人生が辛い時は / 自分を信じなさい。 / そうすれば新しい世界が / あなたのために開かれるでしょう。 / みんなに幸運を！",
      quizzes: [
        { q: "What should you do if it's hard to say 'thank you' out loud?", options: ["Don't say anything", "Thank them in your heart", "Run away", "Wait for ten years"], ans: "Thank them in your heart", explanation: "He suggests thanking people in your heart until you feel brave." },
        { q: "What will happen if you believe in yourself?", options: ["You will fail", "New worlds will open", "You will get more homework", "You will become a sportscaster"], ans: "New worlds will open", explanation: "Believing in yourself leads to new opportunities and a better future." }
      ],
      vocab_quizzes: [
        { word: "thankful", meaning: "感謝している", options: ["驚いている", "怒っている", "感謝している", "疲れている"] },
        { word: "difficult", meaning: "難しい", options: ["難しい", "簡単な", "正しい", "珍しい"] },
        { word: "stressful", meaning: "ストレスのたまる", options: ["楽しい", "ストレスのたまる", "静かな", "安全な"] },
        { word: "experience", meaning: "経験", options: ["知識", "経験", "冒険", "想像"] },
        { word: "stronger", meaning: "より強い", options: ["より速い", "より賢い", "より強い", "より親切な"] }
      ],
      key_phrases: [
        { phrase: "feel thankful to ~", explanation: "「～に感謝の気持ちを抱く」。感謝している状態を表します。" },
        { phrase: "face difficulties", explanation: "「困難に直面する」。壁にぶつかっている状況を指します。" }
      ],
      dictation_items: ["should feel thankful to those", "thank the people in your", "you may face some difficulties", "experiences will help you become", "then new worlds will open"],
      overlappingTips: "【コツ】最後の一文 'Good luck to you all!' は心を込めて、ゆっくり丁寧に締めくくりましょう。",
      shadowingTips: "【コツ】'Difficulties' や 'Stressful' など、子音が続く単語を噛まずに追いかけましょう。"
    },

    // --- Lesson 2: What Are Your Rocks? ---
    {
      id: 5,
      title: "The Professor's Experiment",
      script: "One day, a professor came into the classroom with a large glass jar. He also brought some rocks, pebbles, and sand. In front of the students, he filled the jar with some large rocks. He then asked, 'Is the jar full?' The students said, 'Yes.' Next, he put some small pebbles into the jar. They went into the spaces among the rocks. He asked again, 'Is the jar full now?' The students again said, 'Yes.'",
      slash_script: "One day, / a professor came / into the classroom / with a large glass jar. / He also brought / some rocks, pebbles, and sand. / In front of the students, / he filled the jar / with some large rocks. / He then asked, / 'Is the jar full?' / The students said, / 'Yes.' / Next, / he put some small pebbles / into the jar. / They went / into the spaces / among the rocks. / He asked again, / 'Is the jar full now?' / The students again said, / 'Yes.'",
      japanese_translation: "ある日、 / 教授がやってきました / 教室の中に / 大きなガラスの瓶を持って。 / 彼はまた持ってきました / いくつかの石、小石、そして砂を。 / 生徒たちの前で、 / 彼は瓶を満たしました / いくつかの大きな石で。 / 彼はそれから尋ねました、 / 「瓶はいっぱいですか？」 / 生徒たちは言いました、 / 「はい。」 / 次に、 / 彼はいくつかの小さな小石を入れました / 瓶の中に。 / それらは入り込みました / 隙間の中に / 石の間の。 / 彼は再び尋ねました、 / 「瓶は今、いっぱいですか？」 / 生徒たちは再び言いました、 / 「はい。」",
      quizzes: [
        { q: "What did the professor put into the jar first?", options: ["Sand", "Pebbles", "Large rocks", "Water"], ans: "Large rocks", explanation: "He started by filling the jar with large rocks." },
        { q: "Where did the pebbles go?", options: ["Under the jar", "Into the spaces among the rocks", "Into the professor's pocket", "They didn't fit"], ans: "Into the spaces among the rocks", explanation: "The small pebbles filled the empty spaces between the large rocks." }
      ],
      vocab_quizzes: [
        { word: "professor", meaning: "教授", options: ["教師", "教授", "学生", "校長"] },
        { word: "glass jar", meaning: "ガラスの瓶", options: ["ガラスのコップ", "ガラスの瓶", "木の箱", "銀の皿"] },
        { word: "pebbles", meaning: "小石", options: ["砂岩", "レンガ", "宝石", "小石"] },
        { word: "space", meaning: "隙間・空間", options: ["隙間・空間", "宇宙", "時間", "距離"] },
        { word: "among", meaning: "〜の間に", options: ["〜の横に", "〜の下に", "〜の間に", "〜の後ろに"] }
      ],
      key_phrases: [
        { phrase: "fill A with B", explanation: "「AをBで満たす」。容器などに物を入れる時の基本表現です。" },
        { phrase: "among ~", explanation: "「～の間に」。3つ以上のものの間にある状態を指します。" }
      ],
      dictation_items: ["with a large glass jar", "filled the jar with some", "spaces among the rocks", "Is the jar full now", "students again said yes"],
      overlappingTips: "【コツ】教授の質問 'Is the jar full?' は、生徒に問いかけるように少し抑揚をつけてみましょう。",
      shadowingTips: "【コツ】'pebbles' や 'rocks' など、物の名前をはっきりと発音してリズムを作りましょう。"
    },
    {
      id: 6,
      title: "The Jar is Completely Full",
      script: "Then the professor poured the sand into the jar. All the empty spaces were filled with the sand. He then asked, 'Is the jar full now?' The students laughed and agreed that it was completely full. Why did the professor do this for his students? He wanted them to consider their priorities in life. The jar represents your life. The rocks, pebbles, and sand represent things in your life.",
      slash_script: "Then the professor poured / the sand into the jar. / All the empty spaces / were filled with the sand. / He then asked, / 'Is the jar full now?' / The students laughed / and agreed / that it was completely full. / Why did the professor do this / for his students? / He wanted them / to consider / their priorities in life. / The jar represents / your life. / The rocks, pebbles, and sand / represent things / in your life.",
      japanese_translation: "それから教授は注ぎました / 砂を瓶の中に。 / すべての空いている隙間が / 砂で満たされました。 / 彼はそれから尋ねました、 / 「瓶は今、いっぱいですか？」 / 生徒たちは笑いました / そして同意しました / それが完全にいっぱいであるということに。 / なぜ教授はこれをしたのでしょうか / 生徒たちのために？ / 彼は彼らに～してほしかったのです / よく考えて（ほしい） / 人生における優先事項を。 / 瓶は表しています / あなたの人生を。 / 石、小石、そして砂は / 物事を表しているのです / あなたの人生の中の。",
      quizzes: [
        { q: "What was the last thing the professor poured into the jar?", options: ["Pebbles", "Sand", "Rocks", "Juice"], ans: "Sand", explanation: "The sand was poured in after the rocks and pebbles." },
        { q: "What does the glass jar represent?", options: ["Your school", "Your house", "Your life", "Your dream"], ans: "Your life", explanation: "The professor explained that the jar represents the student's life." }
      ],
      vocab_quizzes: [
        { word: "poured", meaning: "注いだ", options: ["投げた", "注いだ", "運んだ", "置いた"] },
        { word: "agree", meaning: "同意する", options: ["反対する", "驚く", "同意する", "疑う"] },
        { word: "completely", meaning: "完全に", options: ["完全に", "部分的に", "時々", "たぶん"] },
        { word: "consider", meaning: "～をよく考える", options: ["～を無視する", "～をよく考える", "～を忘れる", "～を笑う"] },
        { word: "priority", meaning: "優先事項", options: ["娯楽", "仕事", "責任", "優先事項"] }
      ],
      key_phrases: [
        { phrase: "agree that ~", explanation: "「～ということに同意する」。that以降に同意の内容が来ます。" },
        { phrase: "represent ~", explanation: "「～を表す／象徴する」。比喩の説明によく使われる重要な動詞です。" }
      ],
      dictation_items: ["poured the sand into the", "empty spaces were filled with", "agreed that it was completely", "consider their priorities in life", "represents your life"],
      overlappingTips: "【コツ】'Why did the professor do this?' という疑問文で一度間を置くと、物語に引き込めます。",
      shadowingTips: "【コツ】'poured'［pɔ́ːrd］の R の音を滑らかに発音できるように意識しましょう。"
    },
    {
      id: 7,
      title: "What the Rocks Represent",
      script: "The rocks are your family, your health, and other very important things. The pebbles are such things as your job, house, or car. They are important, too, but living a good life is possible without having them. Your rocks will support you even if your pebbles are gone. The sand represents the smaller things in your life. They aren’t really important, but some people tend to spend too much time on them.",
      slash_script: "The rocks are / your family, your health, / and other very important things. / The pebbles are / such things as / your job, house, or car. / They are important, too, / but living a good life / is possible / without having them. / Your rocks will support you / even if / your pebbles are gone. / The sand represents / the smaller things / in your life. / They aren’t really important, / but some people tend to spend / too much time / on them.",
      japanese_translation: "石は～です / あなたの家族、健康、 / そして他のとても重要なもの。 / 小石は / ～のようなものです / あなたの仕事、家、または車。 / それらも重要ですが、 / 良い人生を送ることは / 可能です / それらがなくても。 / あなたの「石」はあなたを支えてくれます / たとえ～だとしても / あなたの小石がなくなっても。 / 砂は表しています / より小さな物事を / あなたの人生の中の。 / それらは本当は重要ではありません、 / しかし一部の人々は～しがちです / あまりに多くの時間を費やす（傾向がある） / それらに対して。",
      quizzes: [
        { q: "According to the professor, what are the 'rocks'?", options: ["Job and car", "Family and health", "Hobbies and games", "Sand and water"], ans: "Family and health", explanation: "Rocks represent the most essential things like family and health." },
        { q: "What happens if your 'pebbles' are gone?", options: ["Your life ends", "Your rocks will still support you", "The jar breaks", "You become sand"], ans: "Your rocks will still support you", explanation: "The essential 'rocks' remain even if less important things disappear." }
      ],
      vocab_quizzes: [
        { word: "health", meaning: "健康", options: ["富", "健康", "名声", "知性"] },
        { word: "possible", meaning: "可能な", options: ["不可能な", "高価な", "必要な", "可能な"] },
        { word: "without", meaning: "〜なしで", options: ["〜と一緒に", "〜なしで", "〜の中に", "〜の後で"] },
        { word: "support", meaning: "支える・支持する", options: ["支える・支持する", "壊す", "避ける", "邪魔する"] },
        { word: "tend to", meaning: "〜する傾向がある", options: ["〜を恐れる", "〜を望む", "〜する傾向がある", "〜をやめる"] }
      ],
      key_phrases: [
        { phrase: "such things as ~", explanation: "「～のようなもの」。例を挙げるときの A such as B の形です。" },
        { phrase: "tend to ~", explanation: "「～する傾向がある」。無意識にやってしまいがちな習慣を表します。" }
      ],
      dictation_items: ["family, your health, and other", "possible without having them", "rocks will support you even", "represents the smaller things in", "tend to spend too much"],
      overlappingTips: "【コツ】'family' と 'health' の間をしっかり空けて、それらの重要度を強調しましょう。",
      shadowingTips: "【コツ】'without' や 'gone' など、意味的に重要な単語を少し強く発音しましょう。"
    },
    {
      id: 8,
      title: "The Order of Priorities",
      script: "Imagine what will happen if you put your sand into the jar first. After that, you will not be able to put all the rocks and pebbles into it. There will not be enough room for them. This is also true for your life. If you do too many unimportant things first, you will not have enough time to do the important things. To have a good life, you should pay attention to your rocks first. Pebbles come next, and then sand.",
      slash_script: "Imagine / what will happen / if you put your sand / into the jar first. / After that, / you will not be able to put / all the rocks and pebbles / into it. / There will not be / enough room / for them. / This is also true / for your life. / If you do / too many unimportant things first, / you will not have enough time / to do the important things. / To have a good life, / you should pay attention / to your rocks first. / Pebbles come next, / and then sand.",
      japanese_translation: "想像してみてください / 何が起こるかを / もしあなたが砂を入れたら / 最初に瓶の中に。 / その後では、 / あなたは入れることができなくなるでしょう / すべての石や小石を / その中に。 / ～はないでしょう / 十分なスペースが / それらのための。 / これはまた当てはまります / あなたの人生にも。 / もしあなたが～したら / あまりに多くの重要でないことを先に（したら）、 / あなたには十分な時間がなくなるでしょう / 重要なことをするための。 / 良い人生を送るために、 / あなたは注意を払うべきです / あなたの「石」に最初に。 / 小石が次に来て、 / そして砂です。",
      quizzes: [
        { q: "What happens if you put the sand in first?", options: ["The rocks fit better", "There is no room for the rocks", "The jar becomes beautiful", "The sand turns into rocks"], ans: "There is no room for the rocks", explanation: "Filling the life with small things first leaves no space for the important ones." },
        { q: "What should you pay attention to first?", options: ["Your pebbles", "Your sand", "Your rocks", "Everything at once"], ans: "Your rocks", explanation: "The most important priority is the 'rocks'." }
      ],
      vocab_quizzes: [
        { word: "Imagine", meaning: "想像する", options: ["説明する", "想像する", "練習する", "記憶する"] },
        { word: "be able to", meaning: "〜することができる", options: ["〜するのをやめる", "〜し始める", "〜することができる", "〜してはいけない"] },
        { word: "room", meaning: "余白・スペース", options: ["部屋", "家具", "余白・スペース", "建物"] },
        { word: "unimportant", meaning: "重要でない", options: ["必要な", "重要でない", "有名な", "便利な"] },
        { word: "pay attention to", meaning: "〜に注意を払う", options: ["〜に注意を払う", "〜を諦める", "〜を支払う", "〜に参加する"] }
      ],
      key_phrases: [
        { phrase: "be able to ~", explanation: "「～することができる」。canと同じですが、助動詞の後（will be able to）などで活躍します。" },
        { phrase: "pay attention to ~", explanation: "「～に注意を払う」。何かに集中したり、優先したりする時に使います。" }
      ],
      dictation_items: ["imagine what will happen if", "not be able to put", "not enough room for them", "too many unimportant things first", "pay attention to your rocks"],
      overlappingTips: "【コツ】最後の結論 'Pebbles come next, and then sand.' は、教訓を言い聞かせるようにゆっくりと。",
      shadowingTips: "【コツ】'Imagine' から始まる問いかけを、聞き手に届けるような気持ちで追いかけましょう。"
    }
  ]
};
