// src/data/types.ts
export interface Quiz {
  question: string;
  options: string[];
  answer: string;
}

export interface VocabQuiz {
  word: string;
  meaning: string;
}

export interface KeyPhrase {
  phrase: string;
  explanation: string;
}

export interface Episode {
  id: number;
  title: string;
  script: string;
  slash_script?: string;
  japanese_translation?: string;
  quizzes: Quiz[];
  vocab_quizzes: VocabQuiz[];
  key_phrases: KeyPhrase[];
  dictation_items: string[];
}
