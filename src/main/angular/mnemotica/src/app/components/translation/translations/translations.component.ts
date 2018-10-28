import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../services/user';
import {Translation}from '../../../services/translation/model/translation';
import {TranslationService} from '../../../services/translation/translation.service';
import {CoursePick}from '../../../services/translation/model/coursepick';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  user: User;
  coursePick: CoursePick = new CoursePick();


  constructor(private userService: UserService,
              private translationService: TranslationService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => {
      this.user = u;
      this.coursePick.selectedLanguage = this.user.language || 'ENGLISH';
    });
  }

  add() {
    const t = new Translation();
    t.edit = true;
    t.language = this.coursePick.selectedCourse.language;
    t.createdBy = this.user;
    t.translatesTo = [];
    t.translatesTo.push({language:this.coursePick.selectedLanguage, createdBy:this.user} as Translation);
    t.phrases = [];
    t.tags = [];
    this.coursePick.selectedChapter.translations.push(t);
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
          this.translationService.updateChapter(this.coursePick.selectedChapter).subscribe(
            () =>  translation.edit = false);
        }
      );
    }
  }

  finishedEdit(save: boolean, translation:Translation) {
    if (save) {
      this.save(translation);
    } else {
      if (translation.id) {
        // do revert the values to old one
        this.translationService.getTranslation(translation.id).subscribe(
          (oldTranslation) => {
            const idxTranslation = this.coursePick.selectedChapter.translations.findIndex((t) => t === translation);
            this.coursePick.selectedChapter.translations[idxTranslation] = oldTranslation;
          });
      } else {
        this.removeTranslation(translation);
      }
    }
  }

  removeTranslation(translation:Translation) {
    const idx = this.coursePick.selectedChapter.translations.findIndex((t) => t === translation);
    this.coursePick.selectedChapter.translations.splice(idx,1);
    this.translationService.updateChapter(this.coursePick.selectedChapter).subscribe();
  }


}
