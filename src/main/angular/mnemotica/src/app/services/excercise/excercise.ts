import {Lesson} from './lesson';
import {Translation} from '../translation/translation';

export class Excercise {
    id: number;
    lesson: Lesson;
    nextTranslations: Translation[];
}
