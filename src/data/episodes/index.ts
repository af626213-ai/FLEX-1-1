import { lesson1_1 } from './lesson1-1';
import { lesson1_2 } from './lesson1-2';
import { lesson1_3 } from './lesson1-3';
import { lesson2_1 } from './lesson2-1';
import { lesson2_2 } from './lesson2-2';
import { lesson2_3 } from './lesson2-3';

import { CourseData } from '../types';

export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    lesson1_1,
    lesson1_2,
    lesson1_3,
    lesson2_1,
    lesson2_2,
    lesson2_3
  ]
};

// 他のコンポーネントでも型を使用できるようにエクスポート
export type { Episode, KeyPhrase, QuizQuestion, VocabQuestion } from '../types';
