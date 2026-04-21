import { Episode } from '../types';

export const episode1: Episode = {
  id: 1,
  title: "Who is Shuzo Matsuoka?",
  script: "Hello, everyone. I am Matsuoka Shuzo. I was a professional tennis player about thirty years ago. Now I am a sportscaster and tell everyone about the great world of sports. By the way, what is your image of me? You may think of such words as 'passion,' 'spirit,' or 'cheer.' But I am not that kind of person. I am a negative person. So, I always try to support myself with positive words of encouragement.",
  slash_script: "Hello, everyone. / I am Matsuoka Shuzo. / I was a professional tennis player / about thirty years ago. / Now I am a sportscaster / and tell everyone / about the great world of sports. / By the way, / what is your image of me? / You may think of such words as / 'passion,' 'spirit,' or 'cheer.' / But I am not / that kind of person. / I am a negative person. / So, I always try / to support myself / with positive words of encouragement.",
  japanese_translation: "みなさん、こんにちは。 / 私は松岡修造です。 / 私はプロテニスプレーヤーでした / 約30年前に。 / 今はスポーツキャスターです / そしてみんなに伝えています / スポーツの素晴らしい世界について。 / ところで、 / 私のイメージはどんなものですか？ / あなたは～のような言葉を思い浮かべるかもしれません / 「情熱」「精神」「応援」。 / でも、私は～ではありません / そういう種類の人間（ではありません）。 / 私はネガティブな人間なのです。 / だから、私はいつも～するようにしています / 自分自身を支える（ように） / 前向きな励ましの言葉で。",
  quizzes: [
    { q: "What was Shuzo's job thirty years ago?", options: ["Sportscaster", "Professional tennis player", "Teacher", "Coach"], ans: "Professional tennis player", explanation: "The script says he was a professional tennis player about thirty years ago." },
    { q: "How does Shuzo describe his own personality?", options: ["Always positive", "A negative person", "Very angry", "Lazy"], ans: "A negative person", explanation: "Surprisingly, he says, 'I am a negative person.'" }
  ],
  vocab_quizzes: [
    { word: "professional", meaning: "プロの", options: ["プロの", "アマチュアの", "有名な", "引退した"] },
    { word: "sportscaster", meaning: "スポーツキャスター", options: ["審判", "解説者", "スポーツキャスター", "記者"] },
    { word: "passion", meaning: "情熱", options: ["冷静", "情熱", "勇気", "希望"] },
    { word: "negative", meaning: "消極的な", options: ["積極的な", "消極的な", "怒りっぽい", "悲しい"] },
    { word: "encouragement", meaning: "励まし", options: ["批判", "命令", "励まし", "驚き"] }
  ],
  key_phrases: [
    { phrase: "tell A about B", explanation: "「AにBについて伝える」。情報を共有する時の基本形です。" },
    { phrase: "such words as ~", explanation: "「～のような言葉」。具体例を挙げる時に使います。" }
  ],
  dictation_items: ["a professional tennis player about", "tell everyone about the great", "what is your image of", "not that kind of person", "with positive words of encouragement"],
  overlappingTips: "【コツ】自己紹介の部分はハキハキと。'negative' という意外な言葉を強調してみましょう。",
  shadowingTips: "【コツ】修造さんの情熱的な話し方をイメージして、リズムよく追いかけましょう。"
};
