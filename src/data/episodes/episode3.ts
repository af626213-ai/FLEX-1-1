import { Episode } from '../types';

export const episode3: Episode = {
  id: 3,
  title: "The Power of a Smile",
  script: "Many people can’t smile when they are having a hard time. But that is the most important time to try to smile. A smile will have a good effect on you. It will also be good for the people around you. It is a way to bring cheer into people’s lives. Say loudly with a smile, 'Next time, I’ll succeed!' If you say to yourself, 'I can do it,' your heart and body will believe you.",
  slash_script: "Many people can’t smile / when they are having / a hard time. / But that is / the most important time / to try to smile. / A smile / will have a good effect / on you. / It will also be good / for the people around you. / It is a way / to bring cheer / into people’s lives. / Say loudly with a smile, / 'Next time, I’ll succeed!' / If you say to yourself, / 'I can do it,' / your heart and body / will believe you.",
  japanese_translation: "多くの人は辛い時、笑顔になれません。しかし、それこそが笑顔になろうとする最も重要な時なのです。笑顔はあなたに良い効果をもたらします。また、周りの人々にとっても良いことでしょう。それは人々の生活に元気をもたらす方法なのです。笑顔で大きな声で言いましょう、「次は成功するぞ！」と。もし自分に「自分ならできる」と言えば、あなたの心と体はあなたを信じるでしょう。",
  quizzes: [
    { q: "When is the most important time to smile?", options: ["When you win", "When you are having a hard time", "When you eat lunch", "When you are sleeping"], ans: "When you are having a hard time" },
    { q: "What happens if you say 'I can do it' to yourself?", options: ["You will get tired", "Your heart and body will believe you", "People will laugh", "Nothing changes"], ans: "Your heart and body will believe you" }
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
  dictation_items: ["when they are having a", "the most important time to", "good for the people around", "bring cheer into people lives", "your heart and body will"]
};
