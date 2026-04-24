import { episode1 } from './episode1';
import { episode2 } from './episode2';
import { episode3 } from './episode3';
import { episode4 } from './episode4';
import { episode5 } from './episode5';
import { episode6 } from './episode6';
import { episode7 } from './episode7';
import { episode8 } from './episode8';

import { CourseData } from '../types';

export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    episode1, episode2, episode3, episode4,
    episode5, episode6, episode7, episode8
  ]
};

export type { Episode, KeyPhrase, QuizQuestion, VocabQuestion } from '../types';
