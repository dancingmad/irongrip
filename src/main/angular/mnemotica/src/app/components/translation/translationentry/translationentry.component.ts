import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Translation} from '../../../services/translation/translation';
import {TranslationService} from '../../../services/translation/translation.service';

@Component({
  selector: '[app-translationentry]',
  templateUrl: './translationentry.component.html',
  styleUrls: ['./translationentry.component.css']
})
export class TranslationentryComponent implements OnInit {

  @Input('translation')
  translation: Translation;

  @Input('editMode')
  editMode: boolean;

  @Input('language')
  selectedLanguage: string;

  @Output() finishedEditEvent = new EventEmitter<boolean>();

  @Output() removeTranslationEvent = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  addToTags() {

  }

  addToPhrases() {

  }

  saveTranslation() {
    this.finishedEditEvent.emit(true);
  }

  cancelEdit() {
    this.finishedEditEvent.emit(false);
  }

  removeTranslation() {
    this.removeTranslationEvent.emit(true);
  }

  editTranslation(translation:Translation) {
    translation.edit = true;
    // if there is no translatesTo with selected language then create one to allow edit
    if (!translation.translatesTo) {
      translation.translatesTo = [];
    }
    const idx = translation.translatesTo.findIndex((t) => t.language === this.selectedLanguage);
    if (idx===-1) {
      translation.translatesTo.push({language:this.selectedLanguage} as Translation);
    }
  }

}
