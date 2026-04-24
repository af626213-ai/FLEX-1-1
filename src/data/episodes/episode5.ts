import { Episode } from '../types';

export const episode5: Episode = {
  id: 5,
  title: "The Professor's Experiment",
  script: "One day, a professor came into the classroom with a large glass jar. He also brought some rocks, pebbles, and sand. In front of the students, he filled the jar with some large rocks. He then asked, 'Is the jar full?' The students said, 'Yes.' Next, he put some small pebbles into the jar. They went into the spaces among the rocks. He asked again, 'Is the jar full now?' The students again said, 'Yes.'",
  slash_script: "One day, / a professor came / into the classroom / with a large glass jar. // He also brought / some rocks, pebbles, and sand. // In front of the students, / he filled the jar / with some large rocks. // He then asked, / 'Is the jar full?' // The students said, / 'Yes.' // Next, / he put some small pebbles / into the jar. // They went / into the spaces / among the rocks. // He asked again, / 'Is the jar full now?' // The students again said, / 'Yes.'",
  japanese_translation: "ある日、 / 教授がやってきました / 教室の中に / 大きなガラスの瓶を持って。 // 彼はまた持ってきました / いくつかの石、小石、そして砂を。 // 生徒たちの前で、 / 彼は瓶を満たしました / いくつかの大きな石で。 // 彼はそれから尋ねました、 / 「瓶はいっぱいですか？」 // 生徒たちは言いました、 / 「はい。」 // 次に、 / 彼はいくつかの小さな小石を入れました / 瓶の中に。 // それらは入り込みました / 隙間の中に / 石の間の。 // 彼は再び尋ねました、 / 「瓶は今、いっぱいですか？」 // 生徒たちは再び言いました、 / 「はい。」",
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
};
