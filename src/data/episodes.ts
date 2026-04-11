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
  course_title: "How Can We Become Stronger?",
  episodes: [
    {
      id: 1,
      title: "Who is Shuzo Matsuoka?",
      script: "Hello, everyone. I am Matsuoka Shuzo. I was a professional tennis player about thirty years ago. Now I am a sportscaster and tell everyone about the great world of sports. By the way, what is your image of me? You may think of such words as 'passion,' 'spirit,' or 'cheer.' But I am not that kind of person. I am a negative person. So, I always try to support myself with positive words of encouragement.",
      slash_script: "Hello, everyone. / I am Matsuoka Shuzo. / I was a professional tennis player / about thirty years ago. / Now I am a sportscaster / and tell everyone / about the great world of sports. / By the way, / what is your image of me? / You may think of such words as / 'passion,' 'spirit,' or 'cheer.' / But I am not / that kind of person. / I am a negative person. / So, I always try / to support myself / with positive words of encouragement.",
      japanese_translation: "みなさん、こんにちは。 / 私は松岡修造です。 / 私はプロテニスプレーヤーでした / 約30年前に。 / 今はスポーツキャスターです / そしてみんなに伝えています / スポーツの素晴らしい世界について。 / ところで、 / 私のイメージはどんなものですか？ / あなたは～のような言葉を思い浮かべるかもしれません / 「情熱」「精神」「応援」。 / でも、私は～ではありません / そういう種類の人間（ではありません）。 / 私はネガティブな人間なのです。 / だから、私はいつも～するようにしています / 自分自身を支える（ように） / 前向きな励ましの言葉で。",
      quizzes: [
        {
          q: "What was Shuzo's job thirty years ago?",
          options: ["Sportscaster", "Professional tennis player", "Teacher", "Coach"],
          ans: "Professional tennis player",
          explanation: "The script says he was a professional tennis player about thirty years ago."
        },
        {
          q: "How does Shuzo describe his own personality?",
          options: ["Always positive", "A negative person", "Very angry", "Lazy"],
          ans: "A negative person",
          explanation: "Surprisingly, he says, 'I am a negative person.'"
        }
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
      dictation_items: [
        "a professional tennis player about",
        "tell everyone about the great",
        "what is your image of",
        "not that kind of person",
        "with positive words of encouragement"
      ],
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
        {
          q: "Why does Shuzo say it is okay to be nervous?",
          options: ["Because it's funny", "Because you care about the results", "Because everyone is lazy", "Because tests are easy"],
          ans: "Because you care about the results",
          explanation: "Being nervous means you are serious about your success."
        },
        {
          q: "How much effort should you give according to Shuzo?",
          options: ["50%", "80%", "100%", "120%"],
          ans: "120%",
          explanation: "He encourages us to give '120%' to achieve our goals."
        }
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
      dictation_items: [
        "often nervous during a test",
        "because you care about the",
        "means that you are serious",
        "change that feeling into something",
        "give one hundred twenty percent"
      ],
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
        {
          q: "When is the most important time to smile?",
          options: ["When you win", "When you are having a hard time", "When you eat lunch", "When you are sleeping"],
          ans: "When you are having a hard time",
          explanation: "He says a hard time is the most important time to try to smile."
        },
        {
          q: "What happens if you say 'I can do it' to yourself?",
          options: ["You will get tired", "Your heart and body will believe you", "People will laugh", "Nothing changes"],
          ans: "Your heart and body will believe you",
          explanation: "Positive self-talk affects both your mind and body."
        }
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
      dictation_items: [
        "when they are having a",
        "the most important time to",
        "good for the people around",
        "bring cheer into people lives",
        "your heart and body will"
      ],
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
        {
          q: "What should you do if it's hard to say 'thank you' out loud?",
          options: ["Don't say anything", "Thank them in your heart", "Run away", "Wait for ten years"],
          ans: "Thank them in your heart",
          explanation: "He suggests thanking people in your heart until you feel brave."
        },
        {
          q: "What will happen if you believe in yourself?",
          options: ["You will fail", "New worlds will open", "You will get more homework", "You will become a sportscaster"],
          ans: "New worlds will open",
          explanation: "Believing in yourself leads to new opportunities and a better future."
        }
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
      dictation_items: [
        "should feel thankful to those",
        "thank the people in your",
        "you may face some difficulties",
        "experiences will help you become",
        "then new worlds will open"
      ],
      overlappingTips: "【コツ】最後の一文 'Good luck to you all!' は心を込めて、ゆっくり丁寧に締めくくりましょう。",
      shadowingTips: "【コツ】'Difficulties' や 'Stressful' など、子音が続く単語を噛まずに追いかけましょう。"
    }
  ]
};
