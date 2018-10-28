import {Translation} from './translation';
import {ChapterStatistics} from './ChapterStatistics';

export class Chapter {
  id: number;
  name: string;
  translations: Translation[];
  index: number;

// transient
toggle: boolean;
chapterStatistics: ChapterStatistics;
}
