import {Chapter} from '../../translation/model/chapter';
import {TranslationTag} from '../../translation/model/translationtag';
import {Course} from '../../translation/model/course';

export class TrainingConfiguration {
id:number;
course: Course;
chapters:Chapter[];
direction:string;
hintEnabled:boolean;
tags:TranslationTag[];
toLanguage:string;
iterationMode:boolean;
iterationsLimit:number;
skillLevelLimit:number;
useOverallSkillLevel:boolean;
}
