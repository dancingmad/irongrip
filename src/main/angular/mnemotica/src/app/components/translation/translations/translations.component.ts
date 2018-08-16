import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../services/user';
import {Translation} from '../../../services/translation/translation';
import {Observable} from 'rxjs';
import {TranslationService} from '../../../services/translation/translation.service';
import {Course} from '../../../services/translation/course';
import {Chapter} from '../../../services/translation/chapter';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  user: User;
  languages: string[];
  selectedCourse: Course;
  selectedChapter: Chapter;
  selectedLanguage: string;
  courses: Course[];

  constructor(private userService: UserService,
              private translationService: TranslationService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => {
      this.user = u;
      this.refreshCourses();
    });
    this.languages = this.translationService.listLanguages();
  }


  refreshCourses() {
    this.translationService.listCourses().subscribe(
      courses => this.courses = courses
    );
  }

  add() {
    const t = new Translation();
    t.edit = true;
    t.language = this.selectedCourse.language;
    t.createdBy = this.user;
    this.selectedChapter.translations.push(t);
  }

  save(translation:Translation) {
    if (translation.id) {
      this.translationService.updateTranslation(translation).subscribe(
        () => translation.edit = false
      );
    } else {
      this.translationService.addTranslation(translation).subscribe(
        t => {
          translation.id = t.id;
          this.translationService.updateChapter(this.selectedChapter).subscribe();
        }
      );
    }
  }

  delete(translation:Translation) {
    this.translationService.deleteTranslation(translation).subscribe(
      () => this.removeTranslation(translation)
    );
  }

  changeCourse() {
    if (this.selectedCourse.chapters.length > 0) {
      this.selectedChapter = this.selectedCourse.chapters[0];
      this.refreshChapter();
    }
  }

  refreshChapter() {
    this.translationService.getChapter(this.selectedChapter.id).subscribe(
      (chapter) => {
         // replace with refreshed chapter
         const idx = this.selectedCourse.chapters.findIndex((c) => c === this.selectedChapter);
         this.selectedCourse.chapters[idx]=chapter;
         this.selectedChapter = chapter;
      }
    );
  }

  finishedEdit(save: boolean, translation:Translation) {
    if (save) {
      this.save(translation);
    } else {
      if (translation.id) {
        // do revert the values to old one
        this.translationService.getTranslation(translation.id).subscribe(
          (oldTranslation) => {
            const idxTranslation = this.selectedChapter.translations.findIndex((t) => t === translation);
            this.selectedChapter.translations[idxTranslation] = oldTranslation;
          });
      } else {
        this.removeTranslation(translation);
      }
    }
  }

  removeTranslation(translation:Translation) {
    const idx = this.selectedChapter.translations.findIndex((t) => t === translation);
    this.selectedChapter.translations.splice(idx,1);
    this.translationService.updateChapter(this.selectedChapter).subscribe();
  }


}
