// src/data/episodes/index.ts
import { episode1 } from './episode1';
import { episode2 } from './episode2';
// import { episode3 } from './episode3'; // 増えたらここに追加

import { Episode } from '../types';

export const courseData: { episodes: Episode[] } = {
  episodes: [
    episode1,
    episode2,
    // episode3, // 配列に追加
  ]
};

// 型も再エクスポートしておくと便利です
export type { Episode, KeyPhrase } from '../types';
