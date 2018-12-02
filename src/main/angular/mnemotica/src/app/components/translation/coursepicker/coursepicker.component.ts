import {User} from '../../../services/user';
import {CoursePick} from '../../../services/translation/model/coursepick';
import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../../services/translation/model/course';
import {UserService} from '../../../services/user.service';
import {TranslationService} from '../../../services/translation/translation.service';

@Component({
  selector: 'app-coursepicker',
  templateUrl: './coursepicker.component.html',
  styleUrls: ['./coursepicker.component.css']
})
export class CoursepickerComponent implements OnInit {

  @Input('coursePick')
  coursePick: CoursePick;

  user: User;
  languages: string[];
  courses: Course[];

  constructor(private userService: UserService,
              private translationService: TranslationService) {
  }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => {
      this.user = u;
      this.subscribeCourseUpdates();
      this.translationService.updateCourseList();
    });
    this.languages = this.translationService.listLanguages();
  }

  subscribeCourseUpdates() {
    this.translationService.getCourseSubscription().subscribe(
      courses => {
        this.courses = courses;
        if (!this.coursePick.selectedCourse) {
          this.coursePick.selectedCourse = this.courses[0];
          this.changeCourse();
        }
      }
    );
  }

  changeCourse() {
    if (this.coursePick.selectedCourse.chapters.length > 0) {
      this.coursePick.selectedChapter = this.coursePick.selectedCourse.chapters[0];
      this.refreshChapter();
    }
  }

  refreshChapter() {
    this.translationService.getChapter(this.coursePick.selectedChapter.id).subscribe(
      (chapter) => {
        // replace with refreshed chapter
        const idx = this.coursePick.selectedCourse.chapters
          .findIndex((c) => c === this.coursePick.selectedChapter);
        this.coursePick.selectedCourse.chapters[idx]=chapter;
        this.coursePick.selectedChapter = chapter;
      }
    );
  }


}
