import { Episode } from '../types';

export const episode2: Episode = {
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
};
