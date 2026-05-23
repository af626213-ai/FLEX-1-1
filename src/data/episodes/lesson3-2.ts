import { Episode } from '../../types';

export const lesson3_2: Episode = {
  id: 8,
  title: "Energy from Space (Part 2)",
  script: "Are there any solutions to the energy problem? JAXA is now working on a big project. It is planning to build satellites in space and produce energy there. The satellites built by JAXA will produce energy from sunlight. But how will they send the energy to the earth? In the form of microwaves or laser beams! People on the earth will catch them with big antennas called rectennas. What does this mean for the future? If the project succeeds, we will be able to get energy produced in space at any time. There are no rainy days and no nights there. We can always get sunlight as long as the sun exists.",
  
  // 英文のスラッシュの位置
  slash_script: "Are there any solutions / to the energy problem? // JAXA is now working / on a big project. // It is planning / to build satellites in space / and produce energy there. // The satellites built by JAXA / will produce energy / from sunlight. // But how / will they send the energy / to the earth? // In the form of / microwaves or laser beams! // People on the earth / will catch them / with big antennas / called rectennas. // What does this mean / for the future? // If the project succeeds, / we will be able to get energy / produced in space / at any time. // There are no rainy days / and no nights there. // We can always get sunlight / as long as the sun exists. //",
  
  // 英文のスラッシュと完全に位置を一致させた日本語訳
  japanese_translation: "何か解決策はありますか / そのエネルギー問題に対する？ // JAXAは今取り組んでいます / 大きなプロジェクトに。 // それは〜を計画しています / 宇宙に人工衛星を建てることを / そしてそこでエネルギーを生産することを。 // JAXAによって建てられた人工衛星は / エネルギーを生産するでしょう / 太陽光から。 // しかしどのようにして / 彼らはそのエネルギーを送るのでしょうか / 地球へ？ // 〜の形で / マイクロ波やレーザー光線の！ // 地球上の人々は / それらをキャッチするでしょう / 大きなアンテナで / レクテナと呼ばれる。 // これは何を意味するのでしょうか / 将来にとって？ // もしプロジェクトが成功すれば、 / 私たちはエネルギーを得ることができるでしょう / 宇宙で生産された / いつでも。 // 雨の日はありません / そして夜もありません、そこには。 // 私たちはいつでも太陽光を得ることができます / 太陽が存在する限り。 //",

  quizzes: [
    {
      question: "How will the satellites send energy to the earth?",
      options: [
        "By using long electrical cables",
        "In the form of microwaves or laser beams",
        "By sending giant batteries back to earth",
        "Through a space elevator"
      ],
      answer: "In the form of microwaves or laser beams"
    },
    {
      question: "Why can the satellites get sunlight at any time in space?",
      options: [
        "Because there are no rainy days and no nights there.",
        "Because the sun is closer to the satellites.",
        "Because the earth blocks the rain in space.",
        "Because the satellites can fly into the sun."
      ],
      answer: "Because there are no rainy days and no nights there."
    }
  ],

  vocab_quizzes: [
    { english: "solution", japanese: "解決策" },
    { english: "satellite", japanese: "人工衛星" },
    { english: "produce", japanese: "〜を生産する" },
    { english: "microwave", japanese: "マイクロ波（極超短波）" },
    { english: "antenna", japanese: "アンテナ" },
    { english: "succeed", japanese: "成功する" },
    { english: "exist", japanese: "存在する" }
  ],

  key_phrases: [
    {
      phrase: "work on ~",
      explanation: "「〜（仕事や研究など）に取り組む」という意味の重要表現。現在進行形でよく使われます。"
    },
    {
      phrase: "in the form of ~",
      explanation: "「〜の形で、〜の形態で」という意味の表現。エネルギーやデータの状態を表す際によく使われます。"
    },
    {
      phrase: "as long as ~",
      explanation: "「〜する限り、〜の間は」という条件を表す接続詞。期間や条件の限界を示します。"
    }
  ],

  dictation_items: [
    {
      id: 1,
      text: "It is planning to build satellites in space and produce energy there.",
      hiddenWord: "satellites"
    },
    {
      id: 2,
      text: "In the form of microwaves or laser beams!",
      hiddenWord: "microwaves"
    },
    {
      id: 3,
      text: "People on the earth will catch them with big antennas called rectennas.",
      hiddenWord: "antennas"
    },
    {
      id: 4,
      text: "If the project succeeds, we will be able to get energy produced in space at any time.",
      hiddenWord: "succeeds"
    },
    {
      id: 5,
      text: "We can always get sunlight as long as the sun exists.",
      hiddenWord: "exists"
    }
  ]
};
