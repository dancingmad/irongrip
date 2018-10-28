import{Component, Input, OnChanges, OnInit}from '@angular/core';
import {AggregatedTrainingResult}from './aggregatedTrainingResult';
import {of}from 'rxjs';
import {delay}from 'rxjs/operators';
import {InputExclusionDescriptor}from 'tslint/lib/rules/completed-docs/exclusionDescriptors';
import {TrainingResult}from '../../../services/training/model/trainingresult';
import {animate, state, style, transition, trigger}from '@angular/animations';

@Component({
  selector: 'app-trainingresult',
  templateUrl: './trainingresult.component.html',
  styleUrls: ['./trainingresult.component.css'],
  animations: [
    // animation triggers go here
    trigger('progress',[
      state('start', style({
        width:0
      })),
      state('end',style({
        width:'100%'
      })),
      transition('start => end',animate('1s'))
    ])]
})
export class TrainingresultComponent implements OnChanges {

  @Input('finishResult')
  private finishResult:TrainingResult;

  @Input('startResult')
  private startResult:TrainingResult;

  @Input('direction')
  direction:string;

  result: AggregatedTrainingResult;

  constructor() { }

  ngOnChanges() {
      this.result = this.createTrainingComponentResult(
        this.startResult,
        this.finishResult,
        this.direction);
  }

  private createTrainingComponentResult(startResult:TrainingResult,
                                        finishResult:TrainingResult,
                                        direction:string):AggregatedTrainingResult {
    const result = new AggregatedTrainingResult();
    const hitScore = finishResult.hitScore;
    result.hitScore = 0;
    result.hitScoreClass = 'danger';
    // animate the hit score
    of(hitScore).pipe(delay(1000))
      .subscribe((score) => {
        result.hitScore = score>0?score:0;
        result.hitScoreClass = AggregatedTrainingResult.convertHitScoreToClass(result.hitScore);
      });
    const skillScoreFrom = finishResult.skillScoreFrom;
    const skillScoreTo = finishResult.skillScoreTo;
    result.skillScoreTo = startResult.skillScoreTo;
    result.skillScoreFrom = startResult.skillScoreFrom;
    result.skillScoreChangeFrom = 0;
    result.skillScoreChangeTo = 0;
    of(skillScoreFrom).pipe(delay(1000)).subscribe(
      (score) => {
        result.skillScoreFrom = score;
        result.skillScoreFromClass = AggregatedTrainingResult.convertScoreToClass(score);
        if (direction === 'FROM' ||
          direction === 'BOTH') {
          result.skillScoreChangeFrom = score - startResult.skillScoreFrom;
        }
      }
    );
    of(skillScoreTo).pipe(delay(1000)).subscribe(
      (score) => {
        result.skillScoreTo = score;
        result.skillScoreToClass = AggregatedTrainingResult.convertScoreToClass(score);
        if (direction === 'TO' ||
          direction === 'BOTH') {
          result.skillScoreChangeTo = score - startResult.skillScoreTo;
        }
      }
    );
    result.runCount = finishResult.runCount;
    return result;
  }




}
