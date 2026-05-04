import { Episode } from '../types';

export const lesson2_2: Episode = {
  id: 5, // Lesson 2 Part 1 (ID:4) の次なので 5
  title: "Your Priorities in Life",
  script: "Why did the professor do this for his students? He wanted them to consider their priorities in life. The jar represents your life. The rocks, pebbles, and sand represent things in your life. The rocks are your family, your health, and other very important things. The pebbles are such things as your job, house, or car. They are important, too, but living a good life is possible without having them. Your rocks will support you even if your pebbles are gone. The sand represents the smaller things in your life. They aren’t really important, but some people tend to spend too much time on them.",
  slash_script: "Why did the professor do this / for his students? // He wanted them / to consider / their priorities in life. // The jar represents / your life. // The rocks, pebbles, and sand / represent things / in your life. // The rocks are / your family, your health, / and other very important things. // The pebbles are / such things as / your job, house, or car. // They are important, too, / but living a good life / is possible / without having them. // Your rocks will support you / even if / your pebbles are gone. // The sand represents / the smaller things / in your life. // They aren’t really important, / but some people tend to spend / too much time / on them.",
  japanese_translation: "なぜ教授はこれをしたのでしょうか / 生徒たちのために？ // 彼は彼らに～してほしかったのです / よく考えて（ほしい） / 人生における優先事項を。 // 瓶は表しています / あなたの人生を。 // 石、小石、そして砂は / 物事を表しているのです / あなたの人生の中の。 // 石は～です / あなたの家族、健康、 / そして他のとても重要なもの。 // 小石は / ～のようなものです / あなたの仕事、家、または車。 // それらも重要ですが、 / 良い人生を送ることは / 可能です / それらがなくても。 // あなたの「石」はあなたを支えてくれます / たとえ～だとしても / あなたの小石がなくなっても。 // 砂は表しています / より小さな物事を / あなたの人生の中の。 // それらは本当は重要ではありません、 / しかし一部の人々は～しがちです / あまりに多くの時間を費やす（傾向がある） / それらに対して。",
  quizzes: [
    { q: "What does the jar represent?", options: ["School", "Your life", "A glass box", "A dream"], ans: "Your life", explanation: "The professor explained that the jar represents the student's life." },
    { q: "Which are the 'rocks' in our life?", options: ["Job and car", "Sand and pebbles", "Family and health", "Money and games"], ans: "Family and health", explanation: "Rocks represent the most essential things like family and health." },
    { q: "What happens if your 'pebbles' are gone?", options: ["You cannot live", "Your rocks will still support you", "The sand will fill the jar", "You must buy new ones"], ans: "Your rocks will still support you", explanation: "The text states that your rocks will support you even if the pebbles are gone." }
  ],
  vocab_quizzes: [
    { word: "consider", meaning: "〜をよく考える", options: ["〜を無視する", "〜をよく考える", "〜を忘れる", "〜を笑う"] },
    { word: "priority", meaning: "優先事項", options: ["娯楽", "仕事", "責任", "優先事項"] },
    { word: "represent", meaning: "〜を表す・象徴する", options: ["〜を隠す", "〜を表す・象徴する", "〜を壊す", "〜を運ぶ"] },
    { word: "possible", meaning: "可能な", options: ["不可能な", "高価な", "必要な", "可能な"] },
    { word: "tend to", meaning: "〜する傾向がある", options: ["〜を恐れる", "〜を望む", "〜する傾向がある", "〜をやめる"] }
  ],
  key_phrases: [
    { phrase: "consider A", explanation: "「Aをよく考える／検討する」。単に考えるだけでなく、じっくり熟考するニュアンスです。" },
    { phrase: "such ... as ~", explanation: "「～のような…」。job, house, car などの具体例を挙げる際に使われています。" },
    { phrase: "even if ~", explanation: "「たとえ～だとしても」。仮に小石がなくなっても、という条件を表します。" }
  ],
  dictation_items: ["consider their priorities in life", "represents things in your life", "possible without having them", "rocks will support you even", "tend to spend too much"],
  overlappingTips: "【コツ】'The jar represents your life.' という比喩の核心部分は、ゆっくりと重みを持って発音しましょう。",
  shadowingTips: "【コツ】'rocks', 'pebbles', 'sand' という単語が、それぞれ何を指すのか意識しながら追いかけると感情が乗りやすくなります。"
};
