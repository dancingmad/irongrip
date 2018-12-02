import { Pipe, PipeTransform } from '@angular/core';
import {Translation}from '../../../services/translation/model/translation';

@Pipe({
  name: 'filterLanguage',
  pure: false
})
export class FilterLanguagePipe implements PipeTransform {
  transform(translations: Translation[], filter: string): any {
    if (!translations || !filter) {
      return translations;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return translations.filter((t) => t.language === filter);
  }
}
