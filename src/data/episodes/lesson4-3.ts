import { Episode } from '../../types';

export const lesson4_3: Episode = {
  id: 12,
  title: "A Great Success in Science",
  script: "Scientists of the time thought the skeleton which Anning found was a crocodile. Some thought it had come from a distant land. This mysterious creature was studied and discussed for years. Eventually, it was proved to be a new species. They named it Ichthyosaurus. Anning studied geology and anatomy on her own. Over time, she became more and more interested in fossil hunting. In 1823, she discovered the first complete skeleton of a Plesiosaurus. In 1829, she found a strange-looking fossil that had the features of both a shark and a ray. After several years of research, the new creature was named Squaloraja. As a result, her discoveries were increasingly recognized.",
  
  // 英文のスラッシュの位置
  slash_script: "Scientists of the time thought / the skeleton / which Anning found / was a crocodile. // Some thought / it had come / from a distant land. // This mysterious creature / was studied and discussed / for years. // Eventually, / it was proved to be / a new species. // They named it Ichthyosaurus. // Anning studied geology and anatomy / on her own. // Over time, / she became more and more interested / in fossil hunting. // In 1823, / she discovered / the first complete skeleton / of a Plesiosaurus. // In 1829, / she found a strange-looking fossil / that had the features / of both a shark and a ray. // After several years of research, / the new creature was named Squaloraja. // As a result, / her discoveries / were increasingly recognized. //",
  
  // 英文のスラッシュと完全に位置を一致させた日本語訳
  japanese_translation: "当時の科学者たちは考えました / その骨格は / アニングが見つけた / ワニであると。 // 〜と考えた人もいました / それは遠い土地からやってきたのだと。 // この神秘的な生物は / 研究され、議論されました / 何年もの間。 // 結局、 / それは〜であると証明されました / 新しい種（しゅ）であると。 // 彼らはそれをイクチオサウルスと名付けました。 // アニングは地質学と解剖学を学びました / 独力で（自分自身で）。 // 時間が経つにつれて、 / 彼女はますます興味を持つようになりました / 化石探しに。 // 1823年、 / 彼女は発見しました / 最初の完全な骨格を / プレシオサウルスの。 // 1829年、 / 彼女は奇妙な見た目の化石を見つけました / 〜という特徴を持つ / サメとエイの両方の。 // 数年間の研究の後、 / その新しい生物はスクアロラヤと名付けられました。 // 結果として、 / 彼女の発見は / ますます認められるようになりました。 //",

  quizzes: [
    {
      question: "What did scientists of the time first think the skeleton was?",
      options: [
        "A shark",
        "A ray",
        "A crocodile",
        "A giant bird"
      ],
      answer: "A crocodile"
    },
    {
      question: "How did Mary Anning learn geology and anatomy?",
      options: [
        "She studied them at a famous university in London.",
        "She learned them from Charles Darwin.",
        "She studied them on her own.",
        "Her father taught her before he died."
      ],
      answer: "She studied them on her own."
    }
  ],

  vocab_quizzes: [
    { english: "mysterious", japanese: "神秘的な、謎めいた" },
    { english: "discuss", japanese: "〜を議論する、話し合う" },
    { english: "eventually", japanese: "結局、ついに" },
    { english: "prove", japanese: "〜を証明する、〜だとわかる" },
    { english: "geology", japanese: "地質学" },
    { english: "anatomy", japanese: "解剖学" },
    { english: "increasingly", japanese: "ますます、だんだんと" }
  ],

  key_phrases: [
    {
      phrase: "on one's own",
      explanation: "「独力で、自分自身で」という意味の重要表現。本文では on her own となっており、学校に通う余裕がなかったメアリーが、自力で高度な専門知識を身につけた努力の天才であることを示しています。"
    },
    {
      phrase: "the features of both A and B",
      explanation: "「AとBの両方の特徴」という意味のフレーズ。「both A and B（AとBの両方）」という相関接続詞が、名詞 features（特徴）を修飾する形で組み込まれています。"
    },
    {
      phrase: "As a result",
      explanation: "「結果として、その結果」という、因果関係を表すディスコースマーカー（接続表現）。前文の内容（数々の大発見と研究）を受けて、最終的に彼女の功績が社会に認められていく流れを綺麗に繋いでいます。"
    }
  ],

  dictation_items: [
    {
      id: 1,
      text: "This mysterious creature was studied and discussed for years.",
      hiddenWord: "mysterious"
    },
    {
      id: 2,
      text: "Eventually, it was proved to be a new species.",
      hiddenWord: "proved"
    },
    {
      id: 3,
      text: "Anning studied geology and anatomy on her own.",
      hiddenWord: "anatomy"
    },
    {
      id: 4,
      text: "Over time, she became more and more interested in fossil hunting.",
      hiddenWord: "interested"
    },
    {
      id: 5,
      text: "As a result, her discoveries were increasingly recognized.",
      hiddenWord: "increasingly"
    }
  ]
};
