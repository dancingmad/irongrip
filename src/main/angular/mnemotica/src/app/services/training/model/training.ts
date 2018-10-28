import{User}from'../../user';
import {TrainingConfiguration}from './trainingconfiguration';
import {Translation}from '../../translation/model/translation';
import {TrainingResult}from './trainingresult';

export class Training {
id:number;
startedAt:Date;
endedAt:Date;
createdBy:User;
configuration:TrainingConfiguration;
translations:Translation[];
result:TrainingResult;
}
