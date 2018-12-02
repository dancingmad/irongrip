import {User} from '../../user';
import {Translation} from '../../translation/model/translation';
import {TranslationRun} from './translationrun';

export class TranslationStatistics {
    id:number;
    user:User;
    translation:Translation;
    runs:TranslationRun[];
    skillLevelFrom:number;
    skillLevelTo:number;
}
