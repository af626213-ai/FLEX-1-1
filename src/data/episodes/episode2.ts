import { Episode } from '../types';

export const episode2: Episode = {
  id: 2,
  title: "It is Good to be Nervous!",
  script: "Are you often nervous during a test or a presentation? That is not a bad thing. You are nervous because you care about the results. That means that you are serious. You do not want to fail. You want to do well. Be glad that you are worried and change that feeling into something positive. Then, give 120% to achieve your goal!",
  slash_script: "Are you often nervous / during a test / or a presentation? / That is not a bad thing. / You are nervous / because you care / about the results. / That means that / you are serious. / You do not want to fail. / You want to do well. / Be glad / that you are worried / and change that feeling / into something positive. / Then, give 120% / to achieve your goal!",
  japanese_translation: "テストや発表の最中、よく緊張しますか？それは悪いことではありません。あなたが緊張するのは、結果を気にしているからです。それはあなたが真剣だということを意味します。失敗したくない、うまくいってほしいと思っているのです。悩んでいることを喜び、その感情をポジティブなものに変えましょう。そして、目標を達成するために120％の力を出し切りましょう！",
  quizzes: [
    { q: "Why does Shuzo say it is okay to be nervous?", options: ["Because it's funny", "Because you care about the results", "Because everyone is lazy", "Because tests are easy"], ans: "Because you care about the results" },
    { q: "How much effort should you give according to Shuzo?", options: ["50%", "80%", "100%", "120%"], ans: "120%" }
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
  dictation_items: ["often nervous during a test", "because you care about the", "means that you are serious", "change that feeling into something", "give one hundred twenty percent"]
};
