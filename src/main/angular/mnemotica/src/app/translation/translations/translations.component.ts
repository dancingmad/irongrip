import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../services/user';
import {Translation} from '../../services/translation/translation';
import {Observable} from 'rxjs';
import {TranslationService} from '../../services/translation/translation.service';
import {Course} from '../../services/translation/course';
import {Chapter} from '../../services/translation/chapter';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  user: User;
  translations: Translation[];
  languages: string[];
  selectedCourse: Course;
  selectedChapter: Chapter;
  selectedLanguage: string;

  currentTranslation: Translation;

  constructor(private userService: UserService,
              private translationService: TranslationService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => {
      this.user = u;
      this.refreshTranslations();
    });
    this.languages = this.translationService.listLanguages();
  }

  refreshTranslations() {
    this.translationService.listTranslations().subscribe(
       translations => this.translations = translations
    );
  }

  add() {
    this.currentTranslation = new Translation();
    this.translations.push(this.currentTranslation);
  }

  save(translation:Translation) {
    if (translation.id) {
      this.translationService.updateTranslation(translation).subscribe();
    } else {
      this.translationService.addTranslation(translation).subscribe(
        savedTranslation => {
          translation.id = savedTranslation.id;
          this.selectedChapter.translations.push(savedTranslation);
          this.translationService.updateChapter(this.selectedChapter).subscribe();
        }
      );
    }
  }

  delete(translation:Translation) {
    this.translationService.deleteTranslation(translation).subscribe(() => this.refreshTranslations());
  }


}
