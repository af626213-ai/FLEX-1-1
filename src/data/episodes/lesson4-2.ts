import { Episode } from '../../types';

export const lesson4_2: Episode = {
  id: 11,
  title: "A Family Crisis and a Strange Discovery",
  script: "Anning was born in 1799. Early in her childhood, she would often go to the coast near her house with her father. Her father looked for fossils to sell. When she was 11 years old, however, her father died. After that, her family became very poor. Since Anning needed to support her family, she began to work harder to collect fossils. In 1811, during a hunt, she discovered a skeleton of a strange creature. Its head looked like a crocodile, but the rest of its body looked like a fish. It was the first time for anyone to see such a fossil. She was able to sell it for 23 pounds. This was enough money to support her family for several months, but the fossil was actually much more valuable than that.",
  
  // 英文のスラッシュの位置
  slash_script: "Anning was born in 1799. // Early in her childhood, / she would often go / to the coast near her house / with her father. // Her father looked for fossils / to sell. // When she was 11 years old, / however, / her father died. // After that, / her family became very poor. // Since Anning needed to support her family, / she began to work harder / to collect fossils. // In 1811, / during a hunt, / she discovered a skeleton / of a strange creature. // Its head looked like a crocodile, / but the rest of its body / looked like a fish. // It was the first time / for anyone / to see such a fossil. // She was able to sell it / for 23 pounds. // This was enough money / to support her family / for several months, // but the fossil was actually / much more valuable than that. //",
  
  // 英文のスラッシュと完全に位置を一致させた日本語訳
  japanese_translation: "アニングは1799年に生まれました。 // 幼少期の早い時期に、 / 彼女はよく行きました / 彼女の家の近くの海岸へ / 彼女の父親と一緒に。 // 彼女の父親は化石を探しました / 売るための。 // 彼女が11歳のとき、 / しかしながら、 / 父親が亡くなりました。 // その後、 / 彼女の家族はとても貧しくなりました。 // アニングは家族を養う必要があったので、 / 彼女はより一生懸命働き始めました / 化石を集めるために。 // 1811年、 / 化石探しの最中に、 / 彼女は骨格を発見しました / 奇妙な生物の。 // その頭はワニのように見えましたが、 / 体の残りの部分は / 魚のように見えました。 // それは初めてのことでした / 誰もが / そのような化石を見るのは。 // 彼女はそれを売ることができました / 23ポンドで。 // これは十分なお金でした / 彼女の家族を養うのに / 数ヶ月間。 // しかしその化石は実際には / それ（売値）よりもはるかに価値がありました。 //",

  quizzes: [
    {
      question: "Why did Mary Anning begin to work harder to collect fossils after her father died?",
      options: [
        "Because she wanted to travel to London.",
        "Because her father told her to become a scientist.",
        "Because she needed to support her poor family.",
        "Because she loved strange crocodiles."
      ],
      answer: "Because she needed to support her poor family."
    },
    {
      question: "What did the strange creature's body look like?",
      options: [
        "It looked like a crocodile from head to tail.",
        "Its head looked like a crocodile, but the rest looked like a fish.",
        "It looked exactly like a modern bird.",
        "It looked like a 23-pound giant turtle."
      ],
      answer: "Its head looked like a crocodile, but the rest looked like a fish."
    }
  ],

  vocab_quizzes: [
    { english: "childhood", japanese: "子供時代、幼少期" },
    { english: "coast", japanese: "海岸、沿岸" },
    { english: "support", japanese: "〜を支える、養う" },
    { english: "skeleton", japanese: "骨格、骸骨" },
    { english: "creature", japanese: "生物、生き物" },
    { english: "crocodile", japanese: "ワニ" },
    { english: "valuable", japanese: "価値がある、高価な" }
  ],

  key_phrases: [
    {
      phrase: "look like ~",
      explanation: "「〜のように見える」という意味の最重要表現。look 単体だと「〜に見える（後ろは形容詞）」ですが、like（〜のような）を挟むことで後ろに「名詞」を置くことができます。"
    },
    {
      phrase: "It is the first time for A to do ~",
      explanation: "「Aが〜するのは初めてである」という経験を表す構文。本文では過去形（It was the first time...）になっており、「誰もがそのような化石を見るのは初めての経験だった」という歴史的衝撃を表現しています。"
    },
    {
      phrase: "much more valuable than ~",
      explanation: "比較級（more valuable than）の前に much を置くことで、「〜よりも『はるかに』価値がある」と、比較の差が大きいことを強調する表現です。"
    }
  ],

  dictation_items: [
    {
      id: 1,
      text: "Since Anning needed to support her family, she began to work harder",
      hiddenWord: "support"
    },
    {
      id: 2,
      text: "she discovered a skeleton of a strange creature.",
      hiddenWord: "skeleton"
    },
    {
      id: 3,
      text: "Its head looked like a crocodile, but the rest of its body looked like a fish.",
      hiddenWord: "crocodile"
    },
    {
      id: 4,
      text: "It was the first time for anyone to see such a fossil.",
      hiddenWord: "anyone"
    },
    {
      id: 5,
      text: "but the fossil was actually much more valuable than that.",
      hiddenWord: "valuable"
    }
  ]
};
