import {Translation} from '../translation/translation';
import {TranslationTag} from '../translation/translationtag';
import {Chapter} from '../translation/chapter';
import {Course} from '../translation/course';

export class Lesson {
  id: number;
  course: Course;
  chapters: Chapter[];
  tags: TranslationTag[];
  languageFrom: string;
  languageTo: string;
  bothDirections: boolean;
  timeLimit: number;
  iterationLimit: number;
  skillLimit: number;
  badge: string;
}
