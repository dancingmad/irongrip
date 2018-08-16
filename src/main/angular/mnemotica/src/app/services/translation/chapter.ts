import {Translation} from './translation';

export class Chapter {
  id: number;
  name: string;
  translations: Translation[];
  previous: Chapter;
  next: Chapter;
}
