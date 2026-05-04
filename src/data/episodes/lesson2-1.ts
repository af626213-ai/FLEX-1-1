import { Episode } from '../types';

export const lesson2_1: Episode = {
  id: 4, // Lesson 1(1-3)の次なので IDは 4
  title: "The Jar of Life",
  script: "One day, a professor came into the classroom with a large glass jar. He also brought some rocks, pebbles, and sand. In front of the students, he filled the jar with some large rocks. He then asked, “Is the jar full?” The students said, “Yes.” Next, he put some small pebbles into the jar. They went into the spaces among the rocks. He asked again, “Is the jar full now?” The students again said, “Yes.” Then the professor poured the sand into the jar. All the empty spaces were filled with the sand. He then asked, “Is the jar full now?” The students laughed and agreed that it was completely full.",
  slash_script: "One day, / a professor came / into the classroom / with a large glass jar. // He also brought / some rocks, pebbles, and sand. // In front of the students, / he filled the jar / with some large rocks. // He then asked, / “Is the jar full?” // The students said, / “Yes.” // Next, / he put some small pebbles / into the jar. // They went / into the spaces / among the rocks. // He asked again, / “Is the jar full now?” // The students again said, / “Yes.” // Then the professor poured / the sand into the jar. // All the empty spaces / were filled with the sand. // He then asked, / “Is the jar full now?” // The students laughed / and agreed / that it was completely full.",
  japanese_translation: "ある日、 / 教授がやってきました / 教室の中に / 大きなガラスの瓶を持って。 // 彼はまた持ってきました / いくつかの石、小石、そして砂を。 // 生徒たちの前で、 / 彼は瓶を満たしました / いくつかの大きな石で。 // 彼はそれから尋ねました、 / 「瓶はいっぱいですか？」 // 生徒たちは言いました、 / 「はい。」 // 次に、 / 彼はいくつかの小さな小石を入れました / 瓶の中に。 // それらは入り込みました / 隙間の中に / 石の間の。 // 彼は再び尋ねました、 / 「瓶は今、いっぱいですか？」 // 生徒たちは再び言いました、 / 「はい。」 // それから教授は注ぎました / 砂を瓶の中に。 // すべての空いている隙間が / 砂で満たされました。 // 彼はそれから尋ねました、 / 「瓶は今、いっぱいですか？」 // 生徒たちは笑いました / そして同意しました / それが完全にいっぱいであるということに。",
  quizzes: [
    { q: "What did the professor put into the jar first?", options: ["Sand", "Small pebbles", "Large rocks", "Water"], ans: "Large rocks", explanation: "The professor filled the jar with large rocks first." },
    { q: "Where did the pebbles go?", options: ["Under the jar", "Into the spaces among the rocks", "Into the professor's pocket", "They didn't fit"], ans: "Into the spaces among the rocks", explanation: "Small pebbles went into the empty spaces between the large rocks." },
    { q: "What was the last thing the professor put in?", options: ["Large rocks", "Pebbles", "Sand", "Books"], ans: "Sand", explanation: "Finally, the professor poured sand to fill all the remaining spaces." }
  ],
  vocab_quizzes: [
    { word: "professor", meaning: "教授", options: ["教授", "学生", "教師", "校長"] },
    { word: "glass jar", meaning: "ガラスの瓶", options: ["ガラスのコップ", "ガラスの瓶", "木の箱", "銀の皿"] },
    { word: "pebbles", meaning: "小石", options: ["宝石", "レンガ", "岩", "小石"] },
    { word: "space", meaning: "隙間・空間", options: ["宇宙", "隙間・空間", "時間", "距離"] },
    { word: "completely", meaning: "完全に", options: ["時々", "たぶん", "完全に", "部分的に"] }
  ],
  key_phrases: [
    { phrase: "fill A with B", explanation: "「AをBで満たす」。容器に物を入れる時の定番表現です。" },
    { phrase: "among ~", explanation: "「～の間に」。3つ以上のものの間にある状態を指します。" },
    { phrase: "agree that ~", explanation: "「～ということに同意する」。that以下に同意の内容（文）が続きます。" }
  ],
  dictation_items: ["with a large glass jar", "filled the jar with some", "spaces among the rocks", "poured the sand into the", "agreed that it was completely"],
  overlappingTips: "【コツ】教授の問いかけ “Is the jar full?” は、生徒たちに考えさせるようなトーンで読んでみましょう。",
  shadowingTips: "【コツ】'rocks', 'pebbles', 'sand' と次々に物が投入されるリズム感を大切に追いかけてください。"
};
