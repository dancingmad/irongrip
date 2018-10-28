import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap}from '@angular/router';
import {Location} from '@angular/common';
import {Course}from '../../../services/translation/model/course';
import {TranslationService} from '../../../services/translation/translation.service';
import {Chapter}from '../../../services/translation/model/chapter';
import {NotyService} from '../../../services/noty.service';
import {switchMap}from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  languages: string[];
  saving = false;
  loading: Boolean = false;

  static updateChapterIndex(chapters:Chapter[]) {
    chapters.forEach( (chapter,index) => {
      chapter.index = index;
    });
  }

  constructor(private route:ActivatedRoute,
              private location:Location,
              private translationService:TranslationService,
              private notyService:NotyService) {
    translationService.getLoadingListener().subscribe(
      loading => this.loading = loading
    );
  }

  ngOnInit() {
    this.languages = this.translationService.listLanguages();
    this.route.paramMap.subscribe(
      (params) => {
            if (params.get('id') === 'new') {
              this.course = new Course();
              this.course.chapters = [];
            } else {
              const id = +this.route.snapshot.paramMap.get('id');
              this.translationService.getCourse(id).subscribe(
                course => this.course = course
              );
            }
        });
  }

  save() {
    CourseComponent.updateChapterIndex(this.course.chapters);
    if (this.course.id) {
       this.translationService.updateCourse(this.course).subscribe(
         () => {
           this.notyService.addSuccess('Course updated');
           this.translationService.updateCourseList();
         }
       );
    } else {
      this.saving = true;
      this.translationService.addCourse(this.course).subscribe(
        course => {
          this.saving = false;
          if (course) {
            this.course = course;
            this.notyService.addSuccess('New Course added');
            this.translationService.updateCourseList();
          }
        }
      );
    }
  }

  addChapter() {
    this.course.chapters.push({} as Chapter);
  }

  removeChapter(chapter:Chapter) {
    this.course.chapters.forEach((value,index) => {
      if (value === chapter) {
        this.course.chapters.splice(index,1);
      }
    });
  }

  moveChapterUp(chapter:Chapter) {
    const idx = this.course.chapters.indexOf(chapter);
    if (idx <= 0) {
      return;
    }
    this.course.chapters.splice(idx-1,0,chapter);
    this.course.chapters.splice(idx+1,1);
  }

  delete() {
    this.saving = true;
    this.translationService.deleteCourse(this.course.id).subscribe(
      () => this.location.back()
    );
  }

}
