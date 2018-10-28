import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {TranslationService} from '../../../services/translation/translation.service';
import {User} from '../../../services/user';
import {Course} from '../../../services/translation/model/course';
import {TranslationTag} from '../../../services/translation/model/translationtag';
import {TrainingService} from '../../../services/training/training.service';
import {TrainingConfiguration} from '../../../services/training/model/trainingconfiguration';

import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trainingconfig',
  templateUrl: './trainingconfig.component.html',
  styleUrls: ['./trainingconfig.component.css']
})
export class TrainingconfigComponent implements OnInit {

  user: User;
  courses: Course[];
  selectedCourse: Course;
  tags: TranslationTag[];
  iterationMode: Boolean = true;
  limitOptions = [1,2,3,4];
  selectedLimit = 1;
  selectedDirection = 'TO';
  directionOptions = ['FROM','BOTH','TO'];
  loading = false;

  constructor(private userService: UserService,
              private translationService: TranslationService,
              private trainingService:TrainingService,
              private location: Location,
              private router:Router) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(
      u => {
        this.user = u;
        this.translationService.getCourseSubscription().subscribe(
          c => this.courses = c
        );
        this.translationService.subscribeTranslationTags().subscribe(
          t => this.tags = t
        );
        this.translationService.updateCourseList();
        this.translationService.listTranslationTags().subscribe();
      }
    );
  }

  startTraining() {
    this.loading = true;
    this.trainingService
      .addTraining({
         course: this.selectedCourse,
         chapters: this.selectedCourse.chapters.filter( (c) => c.toggle),
         direction: this.selectedDirection,
         iterationMode: this.iterationMode,
         iterationsLimit: this.iterationMode?this.selectedLimit:0,
         skillLevelLimit: this.iterationMode?0:this.selectedLimit,
         toLanguage: this.user.language,
         tags: this.tags.filter((t) => t.toggle)
      } as TrainingConfiguration)
      .subscribe(
        (training) => {
          this.loading = false;
          this.router.navigateByUrl('training/'+training.id);
          },
        () => { this.loading = false; });
  }


  getDirectionImage(direction: string) {
    switch (direction) {
      case 'FROM': return 'arrow_back';
      case 'TO': return 'arrow_forward';
      default: return 'swap_horiz';
    }
  }
}
