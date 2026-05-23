import { Episode } from '../../types';

export const lesson3_3: Episode = {
  id: 9,
  title: "Challenges for JAXA (Part 3)",
  script: "JAXA has worked on this project for a long time. However, it still needs to solve some problems. The biggest one is its costs. JAXA will have to send many satellite parts into space. This will cost a huge amount of money. Another problem is space debris moving around the earth. Because of its high speed, even a small piece of debris can cause great damage to a satellite. Also, it is difficult to focus microwaves or laser beams on exact points very far away. In the JAXA project, the antennas on the earth will be about 36,000 kilometers away. This is another big problem for JAXA to solve.",
  
  // 英文のスラッシュの位置
  slash_script: "JAXA has worked on this project / for a long time. // However, / it still needs to solve / some problems. // The biggest one / is its costs. // JAXA will have to send / many satellite parts / into space. // This will cost / a huge amount of money. // Another problem / is space debris / moving around the earth. // Because of its high speed, / even a small piece of debris / can cause great damage / to a satellite. // Also, / it is difficult to focus / microwaves or laser beams / on exact points / very far away. // In the JAXA project, / the antennas on the earth / will be about 36,000 kilometers away. // This is another big problem / for JAXA to solve. //",
  
  // 英文のスラッシュと完全に位置を一致させた日本語訳
  japanese_translation: "JAXAはこのプロジェクトに取り組んできました / 長い間。 // しかしながら、 / それはまだ〜を解決する必要があります / いくつかの問題を。 // 最も大きなものは / そのコスト（費用）です。 // JAXAは〜を送らなければならないでしょう / 多くの人工衛星の部品を / 宇宙へ。 // これは〜を費やすでしょう / 巨額のお金を。 // もう一つの問題は / スペースデブリ（宇宙ゴミ）です / 地球の周りを動いている。 // その高い速度のために、 / たとえ小さなデブリの破片であっても / 大きな損害を引き起こす可能性があります / 人工衛星に。 // また、 / 〜することは困難です / マイクロ波やレーザー光線の焦点を合わせることは / 正確な地点に / はるか遠く離れた。 // JAXAのプロジェクトでは、 / 地球上のアンテナは / 約36,000キロメートル離れた場所にあるでしょう。 // これはもう一つの大きな問題です / JAXAが解決すべき。 //",

  quizzes: [
    {
      question: "What is the biggest problem for the project mentioned first?",
      options: [
        "The lack of engineers",
        "The satellite's costs",
        "The weather on the earth",
        "The danger of solar flares"
      ],
      answer: "The satellite's costs"
    },
    {
      question: "How far away will the antennas on the earth be from the satellites?",
      options: [
        "About 3,600 kilometers",
        "About 12,000 kilometers",
        "About 36,000 kilometers",
        "About 360,000 kilometers"
      ],
      answer: "About 36,000 kilometers"
    }
  ],

  vocab_quizzes: [
    { english: "solve", japanese: "〜を解決する" },
    { english: "cost", japanese: "費用、(費用が)かかる" },
    { english: "huge", japanese: "巨大な、莫大な" },
    { english: "amount", japanese: "量、総額" },
    { english: "debris", japanese: "破片、ゴミ" },
    { english: "damage", japanese: "損害、ダメージ" },
    { english: "exact", japanese: "正確な" }
  ],

  key_phrases: [
    {
      phrase: "a huge amount of ~",
      explanation: "「莫大な量の〜、巨額の〜」という意味の重要表現。amountは不可算名詞（数えられない名詞）の量を表す際によく使われます。"
    },
    {
      phrase: "Because of ~",
      explanation: "「〜のために、〜のせいで」という理由を表す群前置詞。後ろには動詞ではなく「名詞（句）」が来ます。"
    },
    {
      phrase: "focus A on B",
      explanation: "「AをBに集中させる、焦点を合わせる」という意味の動詞フレーズ。科学的な文章や日常生活でも頻出します。"
    }
  ],

  dictation_items: [
    {
      id: 1,
      text: "However, it still needs to solve some problems.",
      hiddenWord: "solve"
    },
    {
      id: 2,
      text: "This will cost a huge amount of money.",
      hiddenWord: "amount"
    },
    {
      id: 3,
      text: "Another problem is space debris moving around the earth.",
      hiddenWord: "debris"
    },
    {
      id: 4,
      text: "even a small piece of debris can cause great damage to a satellite.",
      hiddenWord: "damage"
    },
    {
      id: 5,
      text: "it is difficult to focus microwaves or laser beams on exact points very far away.",
      hiddenWord: "exact"
    }
  ]
};
