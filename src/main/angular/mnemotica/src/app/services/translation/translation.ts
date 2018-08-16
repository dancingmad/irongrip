import {TranslationTag} from './translationtag';
import {User} from '../user';

export class Translation {
  id: number;
  translation: string;
  language: string;
  hint: string;
  translatesTo: Translation[];
  phrases: Translation[];
  tags: TranslationTag[];
  createdBy: User;
  skillLevel: number;

  // transient
  edit: boolean;
}

