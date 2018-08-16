import {Course} from './course';
import {Translation} from './translation';

export class Chapter {
  id: number;
  name: string;
  course: Course;
  translations: Translation[];
  previous: Chapter;
  next: Chapter;
}
