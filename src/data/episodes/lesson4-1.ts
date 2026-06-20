import { Episode } from '../../types';

export const lesson4_1: Episode = {
  id: 10,
  title: "A Portrait in London",
  script: "In the Natural History Museum in London, there is a popular gallery featuring a variety of fossils. There, a portrait of a woman is displayed with them. Her name is Mary Anning. She was a professional fossil hunter who made many important discoveries. Anning often did not receive credit for her work. However, the fossils that she found changed scientists’ understanding of the history of the earth. They showed that species changed in shape over long periods of time. Some of her discoveries were even used as examples for Darwin’s theory of evolution. With such a successful career in science, what kind of life did Mary Anning live?",
  
  // 英文のスラッシュの位置
  slash_script: "In the Natural History Museum in London, / there is a popular gallery / featuring a variety of fossils. // There, / a portrait of a woman / is displayed with them. // Her name is Mary Anning. // She was a professional fossil hunter / who made many important discoveries. // Anning often did not receive credit / for her work. // However, / the fossils that she found / changed scientists’ understanding / of the history of the earth. // They showed / that species changed in shape / over long periods of time. // Some of her discoveries / were even used as examples / for Darwin’s theory of evolution. // With such a successful career in science, / what kind of life / did Mary Anning live? //",
  
  // 英文のスラッシュと完全に位置を一致させた日本語訳
  japanese_translation: "ロンドンの自然史博物館には、 / 人気のギャラリーがあります / さまざまな化石を展示している。 // そこに、 / 一人の女性の肖像画が / それら（化石）と一緒に展示されています。 // 彼女の名前はメアリー・アニングです。 // 彼女はプロの化石ハンターでした / 多くの重要な発見をした。 // アニングはしばしば功績を認められませんでした / 彼女の仕事に対する。 // しかしながら、 / 彼女が見つけた化石は / 科学者たちの理解を変えました / 地球の歴史に対する。 // それらは〜を示しました / 種が形を変えたことを / 長い期間にわたって。 // 彼女の発見のいくつかは / 例として使われさえしました / ダーウィンの進化論の。 // 科学におけるそのような成功した経歴（キャリア）を持ちながら、 / どのような人生を / メアリー・アニングは送ったのでしょうか。 //",

  quizzes: [
    {
      question: "Whose portrait is displayed with a variety of fossils in the London museum?",
      options: [
        "Charles Darwin's",
        "Mary Anning's",
        "A popular scientist's",
        "A London museum director's"
      ],
      answer: "Mary Anning's"
    },
    {
      question: "According to the text, what did the fossils found by Anning show?",
      options: [
        "Fossils could be sold for a huge amount of money.",
        "The history of London was very long.",
        "Species changed in shape over long periods of time.",
        "Darwin was the first person to find fossils."
      ],
      answer: "Species changed in shape over long periods of time."
    }
  ],

  vocab_quizzes: [
    { english: "feature", japanese: "〜を特徴にする、展示する" },
    { english: "fossil", japanese: "化石" },
    { english: "portrait", japanese: "肖像画" },
    { english: "display", japanese: "〜を展示する、飾る" },
    { english: "credit", japanese: "功績、称賛、クレジット" },
    { english: "species", japanese: "（生物の）種（しゅ）" },
    { english: "evolution", japanese: "進化" }
  ],

  key_phrases: [
    {
      phrase: "a variety of ~",
      explanation: "「さまざまな〜、多様な〜」という意味の重要表現。後ろには原則として「複数名詞」が来ます。単に many と言うよりも、多様性に焦点を当てたい時によく使われます。"
    },
    {
      phrase: "receive credit for ~",
      explanation: "「〜に対して功績を認められる、称賛を受ける」という意味のフレーズ。本文では did not receive と否定されているため、彼女の偉大な仕事が当時は正当に評価されなかったことを表しています。"
    },
    {
      phrase: "over long periods of time",
      explanation: "「長い期間にわたって、長年にわたり」という、時間の経過を表す定型表現。科学や歴史の文脈で、形状や環境がじわじわと変化していく様子を描写する際によく使われます。"
    }
  ],

  dictation_items: [
    {
      id: 1,
      text: "there is a popular gallery featuring a variety of fossils.",
      hiddenWord: "fossils"
    },
    {
      id: 2,
      text: "She was a professional fossil hunter who made many important discoveries.",
      hiddenWord: "discoveries"
    },
    {
      id: 3,
      text: "Anning often did not receive credit for her work.",
      hiddenWord: "credit"
    },
    {
      id: 4,
      text: "They showed that species changed in shape over long periods of time.",
      hiddenWord: "species"
    },
    {
      id: 5,
      text: "Some of her discoveries were even used as examples for Darwin's theory of evolution.",
      hiddenWord: "evolution"
    }
  ]
};
