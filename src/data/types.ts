// クイズ（内容理解）の型定義
export interface QuizQuestion {
  q: string;           // 問題文
  options: string[];   // 選択肢（4つ）
  ans: string;         // 正解の文字列
  explanation: string; // 解説
}

// 語彙クイズの型定義
export interface VocabQuestion {
  word: string;        // 英単語
  meaning: string;     // 意味（日本語）
  options: string[];   // 選択肢
}

// キーフレーズの型定義
export interface KeyPhrase {
  phrase: string;      // フレーズ
  explanation: string; // 文法解説
}

// エピソード（各パート）の全体構造
export interface Episode {
  id: number;                // Lesson/Partに基づいた通し番号
  title: string;             // タイトル
  script: string;            // 本文（ベタ打ち）
  slash_script: string;      // スラッシュ区切りの本文
  japanese_translation: string; // スラッシュ対応の日本語訳
  quizzes: QuizQuestion[];   // 理解度クイズの配列
  vocab_quizzes: VocabQuestion[]; // 語彙クイズの配列
  key_phrases: KeyPhrase[];  // 重要表現の配列
  dictation_items: string[]; // ディクテーション用の抜き出し
  overlappingTips?: string;  // オーバーラッピングのアドバイス（任意）
  shadowingTips?: string;    // シャドーイングのアドバイス（任意）
}

// コース全体のデータ構造
export interface CourseData {
  course_title: string;
  episodes: Episode[];
}
