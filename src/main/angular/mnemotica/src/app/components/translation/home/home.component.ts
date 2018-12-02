import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../services/user';
import {Training}from '../../../services/training/model/training';
import {TrainingService}from '../../../services/training/training.service';
import {NotyService}from '../../../services/noty.service';
import {TranslationTag}from '../../../services/translation/model/translationtag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  trainings: Training[];

  constructor(private userService:UserService,
              private trainingService:TrainingService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(
      user => {
        this.user = user;
        this.trainingService.getTrainingSubscription().subscribe(
          (t) => this.trainings = t
        );
        this.trainingService.updateTrainingList();
      }
    );
  }

  closeTraining(training:Training) {
     this.trainingService.closeTraining(training);
  }

  replayTraining(training:Training) {
    this.trainingService.addTraining(training.configuration).subscribe();
  }

  getTagName(tag:TranslationTag):string {
    if (tag.name === 'EMPTY_TAG') {
      return '-';
    }
    return tag.name;
  }


  getStatImage(training: Training):string {
    if (training.configuration.direction === 'FROM') {
      return 'filter_'+training.result.minSkillFrom;
    }
    if (training.configuration.direction === 'TO') {
      return 'filter_'+training.result.minSkillTo;
    }
    return 'filter_'+Math.min(training.result.minSkillFrom,training.result.minSkillTo);
  }
}
