import {Chapter} from './chapter';

export class Course {
  id: number;
  name: string;
  previous: Course;
  next: Course;
  chapters: Chapter[];
  language: string;
}
