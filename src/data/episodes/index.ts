// 各エピソードファイルをインポート
import { episode1 } from './episode1';
import { episode2 } from './episode2';
import { episode3 } from './episode3';
import { episode4 } from './episode4';
// Lesson 2 以降を追加する場合は、ここに import を足していきます

import { Episode, CourseData } from '../types';

export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    episode1,
    episode2,
    episode3,
    episode4,
    // 今後、episode5, episode6... とここに追加していきます
  ]
};

// コンポーネント側でインポートしやすいように型も再エクスポート
export type { Episode, KeyPhrase, QuizQuestion, VocabQuestion } from '../types';
