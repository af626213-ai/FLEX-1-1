import { Episode } from '../types';

export const episode6: Episode = {
  id: 6,
  title: "The Jar is Completely Full",
  script: "Then the professor poured the sand into the jar. All the empty spaces were filled with the sand. He then asked, 'Is the jar full now?' The students laughed and agreed that it was completely full. Why did the professor do this for his students? He wanted them to consider their priorities in life. The jar represents your life. The rocks, pebbles, and sand represent things in your life.",
  slash_script: "Then the professor poured / the sand into the jar. // All the empty spaces / were filled with the sand. // He then asked, / 'Is the jar full now?' // The students laughed / and agreed / that it was completely full. // Why did the professor do this / for his students? // He wanted them / to consider / their priorities in life. // The jar represents / your life. // The rocks, pebbles, and sand / represent things / in your life.",
  japanese_translation: "それから教授は注ぎました / 砂を瓶の中に。 // すべての空いている隙間が / 砂で満たされました。 // 彼はそれから尋ねました、 / 「瓶は今、いっぱいですか？」 // 生徒たちは笑いました / そして同意しました / それが完全にいっぱいであるということに。 // なぜ教授はこれをしたのでしょうか / 生徒たちのために？ // 彼は彼らに～してほしかったのです / よく考えて（ほしい） / 人生における優先事項を。 // 瓶は表しています / あなたの人生を。 // 石、小石、そして砂は / 物事を表しているのです / あなたの人生の中の。",
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
  shadowingTips: "【コツ】'poured' の語尾の響きを滑らかに発音できるように意識しましょう。"
};
