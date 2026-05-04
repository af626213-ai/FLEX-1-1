import { Episode } from '../types';

export const lesson2_3: Episode = {
  id: 6, // Lesson 2 Part 2 (ID:5) の次なので 6
  title: "The Order of Priorities",
  script: "You can probably imagine what will happen if you put your sand into the jar first. After that, you will not be able to put all the rocks and pebbles into it. There will not be enough room for them. This is also true for your life. If you do too many unimportant things first, you will not have enough time to do the important things. To have a good life, you should pay attention to your rocks first. Pebbles come next, and then sand. This order of priorities is really important. It will help you keep all the important things in your life.",
  slash_script: "You can probably imagine / what will happen / if you put your sand / into the jar first. // After that, / you will not be able to put / all the rocks and pebbles / into it. // There will not be / enough room / for them. // This is also true / for your life. // If you do / too many unimportant things first, / you will not have enough time / to do the important things. // To have a good life, / you should pay attention / to your rocks first. // Pebbles come next, / and then sand. // This order of priorities / is really important. // It will help you / keep all the important things / in your life.",
  japanese_translation: "あなたはたぶん想像できるでしょう / 何が起こるかを / もしあなたが砂を入れたら / 最初に瓶の中に。 // その後では、 / あなたは入れることができなくなるでしょう / すべての石や小石を / そのの中に。 // ～はないでしょう / 十分なスペースが / それらのための。 // これはまた当てはまります / あなたの人生にも。 // もしあなたが～したら / あまりに多くの重要でないことを先に（したら）、 / あなたには十分な時間がなくなるでしょう / 重要なことをするための。 // 良い人生を送るために、 / あなたは注意を払うべきです / あなたの「石」に最初に。 // 小石が次に来て、 / そして砂です。 // この優先順位の順序は / 本当に重要です。 // それはあなたを助けてくれるでしょう / すべての重要なものを維持する（助けに） / あなたの人生において。",
  quizzes: [
    { q: "What happens if you put the sand in first?", options: ["The rocks fit better", "There is no room for the rocks", "The jar becomes beautiful", "The sand turns into rocks"], ans: "There is no room for the rocks", explanation: "If you fill the jar with sand first, the larger rocks and pebbles will not fit." },
    { q: "What should you pay attention to first for a good life?", options: ["Your pebbles", "Your sand", "Your rocks", "Everything at once"], ans: "Your rocks", explanation: "The text says you should pay attention to your rocks (the most important things) first." },
    { q: "Why is the order of priorities important?", options: ["To make the jar heavy", "To help you keep all important things", "To save money", "To please the professor"], ans: "To help you keep all important things", explanation: "The correct order ensures that all truly important things remain in your life." }
  ],
  vocab_quizzes: [
    { word: "imagine", meaning: "想像する", options: ["説明する", "想像する", "練習する", "記憶する"] },
    { word: "be able to", meaning: "〜することができる", options: ["〜するのをやめる", "〜し始める", "〜することができる", "〜してはいけない"] },
    { word: "room", meaning: "余白・スペース", options: ["部屋", "家具", "余白・スペース", "建物"] },
    { word: "unimportant", meaning: "重要でない", options: ["必要な", "重要でない", "有名な", "便利な"] },
    { word: "order", meaning: "順序・順番", options: ["順序・順番", "命令", "注文", "混乱"] }
  ],
  key_phrases: [
    { phrase: "be able to ~", explanation: "「～することができる」。will などの助動詞と一緒に「～できるようになるだろう」と未来の能力を表す際によく使われます。" },
    { phrase: "pay attention to ~", explanation: "「～に注意を払う」。意識を向ける、大事にするというニュアンスで使われます。" },
    { phrase: "This is true for ~", explanation: "「これは～にも当てはまる」。ある法則や事例が別のものにも共通することを表します。" }
  ],
  dictation_items: ["imagine what will happen if", "not be able to put", "not enough room for them", "too many unimportant things first", "pay attention to your rocks"],
  overlappingTips: "【コツ】'Pebbles come next, and then sand.' の部分は、一つひとつ確認するように、ゆっくりとリズムを刻んでみましょう。",
  shadowingTips: "【コツ】'important' と 'unimportant' の対比を、声のトーンや強調で表現できるように意識して追いかけてください。"
};
