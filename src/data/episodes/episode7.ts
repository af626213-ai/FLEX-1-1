import { Episode } from '../types';

export const episode7: Episode = {
  id: 7,
  title: "What the Rocks Represent",
  script: "The rocks are your family, your health, and other very important things. The pebbles are such things as your job, house, or car. They are important, too, but living a good life is possible without having them. Your rocks will support you even if your pebbles are gone. The sand represents the smaller things in your life. They aren’t really important, but some people tend to spend too much time on them.",
  slash_script: "The rocks are / your family, your health, / and other very important things. // The pebbles are / such things as / your job, house, or car. // They are important, too, / but living a good life / is possible / without having them. // Your rocks will support you / even if / your pebbles are gone. // The sand represents / the smaller things / in your life. // They aren’t really important, / but some people tend to spend / too much time / on them.",
  japanese_translation: "石は～です / あなたの家族、健康、 / そして他のとても重要なもの。 // 小石は / ～のようなものです / あなたの仕事、家、または車。 // それらも重要ですが、 / 良い人生を送ることは / 可能です / それらがなくても。 // あなたの「石」はあなたを支えてくれます / たとえ～だとしても / あなたの小石がなくなっても。 // 砂は表しています / より小さな物事を / あなたの人生の中の。 // それらは本当は重要ではありません、 / しかし一部の人々は～しがちです / あまりに多くの時間を費やす（傾向がある） / それらに対して。",
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
};
