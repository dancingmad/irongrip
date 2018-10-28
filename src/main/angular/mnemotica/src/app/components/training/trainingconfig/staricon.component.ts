import{Component, Input, OnInit}from '@angular/core';
import {Chapter}from '../../../services/translation/model/chapter';

@Component({
  selector: 'app-star-icon',
  template: `<img *ngIf="chapter.chapterStatistics" src="assets/icons/{{icon}}.png">`
})
export class StarIconComponent {
  @Input()
  chapter: Chapter;

  @Input()
  direction: string;

  static getIconForScore(score:number) {
    if (score < 100) {
      return 'star0';
    }
    if (score < 200) {
      return 'star100';
    }
    if (score < 300) {
      return 'star200';
    }
    return 'star300';
  }

  static getStarIcon(chapter: Chapter, selectedDirection: string) {
    switch (selectedDirection) {
      case 'FROM': return StarIconComponent.getIconForScore(chapter.chapterStatistics.chapterScoreFrom);
      case 'TO': return StarIconComponent.getIconForScore(chapter.chapterStatistics.chapterScoreTo);
      default: return StarIconComponent.getIconForScore(
        chapter.chapterStatistics.chapterScoreFrom>chapter.chapterStatistics.chapterScoreTo?
          chapter.chapterStatistics.chapterScoreTo:chapter.chapterStatistics.chapterScoreFrom
      );
    }
  }

  get icon() {
    return StarIconComponent.getStarIcon(this.chapter, this.direction);
  }



}
