import{Component, ElementRef, OnInit, ViewChild}from '@angular/core';
import {UserService}from '../../../services/user.service';
import {ActivatedRoute}from '@angular/router';
import {TrainingService}from '../../../services/training/training.service';
import {Training} from '../../../services/training/model/training';
import {TranslationStatistics}from '../../../services/training/model/translationstatistics';
import {TranslationStatisticsService} from '../../../services/training/translationstatistics.service';
import {TranslationRun}from '../../../services/training/model/translationrun';
import {AggregatedTrainingResult} from '../trainingresult/aggregatedTrainingResult';
import {merge, Observable, of, pipe}from 'rxjs';
import {delay, mapTo}from 'rxjs/operators';
import {animate, state, style, transition, trigger}from '@angular/animations';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {

  training:Training;
  trainingFinish:Training;
  stats:TranslationStatistics[];
  currentStatistics:TranslationStatistics;
  isCurrentDirectionTo = true;
  loading = false;
  guess: string;
  lockedGuess: string;
  isGuessCorrect: boolean;
  guessInput = false;

  constructor(private route:ActivatedRoute,
              private userService:UserService,
              private trainingService:TrainingService,
              private statisticsService:TranslationStatisticsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
            this.reset();
           const trainingId = +params.get('id');
           this.trainingService.getTraining(trainingId).subscribe(
             (t) => {
               this.training = t;
               this.fetchNextTranslations();
             }
           );
      });
  }

  private reset() {
    this.training = null;
    this.trainingFinish = null;
    this.guessInput = false;
    this.loading = false;
  }

  fetchNextTranslations() {
    this.loading = true;
    this.statisticsService.fetchNextStatistics(this.training.id)
      .subscribe((stats) => {
        if (stats.length === 0) {
          this.trainingService.closeTraining(this.training).subscribe(
            (t) => {
              this.trainingFinish = t;
              this.loading = false;
            }
          );
        } else {
          this.loading = false;
          this.stats = stats;
          this.loadNextStatistics();
        }
      });
  }

  addRun(hit:boolean) {
    this.loading = true;
    this.statisticsService.addTranslationRun(
      this.training.id,
      this.currentStatistics.translation.id,
      {hit:hit?1:0, runAt: new Date(), directionTo: this.isCurrentDirectionTo} as TranslationRun)
      .subscribe(
        () => {
          this.loadNextStatistics();
          this.loading = false;
        }
      );
  }

  loadNextStatistics() {
    if (this.stats.length === 0) {
      this.currentStatistics = null;
      this.fetchNextTranslations();
      return;
    }
    this.currentStatistics = this.stats.pop();
    this.guess = '';
    this.guessInput = true;
    if (this.training.configuration.direction === 'FROM') {
       this.isCurrentDirectionTo = false;
    } else if (this.training.configuration.direction === 'TO') {
      this.isCurrentDirectionTo = true;
    } else {
      this.isCurrentDirectionTo = !this.isCurrentDirectionTo;
    }
  }

  checkGuess() {
    if (this.loading) {
      return;
    }
    this.lockedGuess = this.guess;
    if (!this.guessInput) {
      this.addRun(this.isGuessCorrect);
    } else {
      this.guessInput = false;
      if (this.isCurrentDirectionTo) {
        this.isGuessCorrect =
          this.guess === this.currentStatistics.translation.translatesTo[0].translation;
      } else {
        this.isGuessCorrect =
          this.guess === this.currentStatistics.translation.translation;
      }
    }
  }

  get fontClass(): string {
    return this.currentStatistics.translation.translation.length < 10 ? 'font-big' : 'font-normal';
  }
}
