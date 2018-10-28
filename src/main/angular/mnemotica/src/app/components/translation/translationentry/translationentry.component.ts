import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Translation}from '../../../services/translation/model/translation';
import {TranslationService} from '../../../services/translation/translation.service';
import {TranslationTag}from '../../../services/translation/model/translationtag';
import {UserService}from '../../../services/user.service';
import {User}from '../../../services/user';
import {Observable, of, timer} from 'rxjs';
import {debounce, mergeMap}from 'rxjs/operators';

@Component({
  selector: '[app-translationentry]',
  templateUrl: './translationentry.component.html',
  styleUrls: ['./translationentry.component.css']
})
export class TranslationentryComponent implements OnInit {

  tagInput: string;
  phraseInput: string;

  @Input('translation')
  translation: Translation;

  @Input('editMode')
  editMode: boolean;

  @Input('language')
  selectedLanguage: string;

  allTags: TranslationTag[] = [];

  @Output() finishedEditEvent = new EventEmitter<boolean>();

  @Output() removeTranslationEvent = new EventEmitter<boolean>();

  user: User;

  constructor(private userService:UserService,
              private translationService:TranslationService) {
  }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe((u) => this.user = u);
  }

  getAvailableTags():TranslationTag[] {
    return this.allTags.filter(
      (t) => !this.translation.tags.find(
        (tag) => tag.name === t.name));
  }

  addToTags(tagName:string) {
    if (this.translation.tags.find((t) => t.name === tagName)) {
      return;
    }
    const addedTag = this.allTags.find((t) => t.name === tagName);
    if (!addedTag) {
      this.createAndAddTranslationTag(tagName);
    } else {
      this.translation.tags.push(addedTag);
      this.tagInput = '';
    }
  }

  private createAndAddTranslationTag(tagName:string) {
    this.translationService.addTranslationTag({name:tagName,createdBy:this.user} as TranslationTag).subscribe(
      (tag) => {
        this.allTags.push(tag);
        this.translation.tags.push(tag);
        this.tagInput = '';
      }
    );
  }

  addToPhrases() {
     this.translation.phrases.push({
       translation:this.phraseInput,
       language:this.translation.language } as Translation);
     this.phraseInput = '';
  }

  deletePhrase(phrase:Translation) {
     const idx = this.translation.phrases.indexOf(phrase);
     this.translation.phrases.splice(idx,1);
  }

  deleteTag(tag:TranslationTag) {
    const idx = this.translation.tags.indexOf(tag);
    this.translation.tags.splice(idx,1);
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
    this.refreshTags();
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

  refreshTags() {
    this.translationService.listTranslationTags().subscribe(
      tags => this.allTags = tags
    );
  }

}
