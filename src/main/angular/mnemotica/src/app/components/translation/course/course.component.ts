import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Course} from '../../../services/translation/course';
import {TranslationService} from '../../../services/translation/translation.service';
import {Chapter} from '../../../services/translation/chapter';
import {NotyService} from '../../../services/noty.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  languages: string[];
  saving = false;

  constructor(private route:ActivatedRoute,
              private location:Location,
              private translationService:TranslationService,
              private notyService:NotyService) { }

  ngOnInit() {
    this.languages = this.translationService.listLanguages();
    if (this.route.snapshot.paramMap.get('id') === 'new') {
      this.course = new Course();
      this.course.chapters = [];
    } else {
      const id = +this.route.snapshot.paramMap.get('id');
      this.translationService.getCourse(id).subscribe(
        course => this.course = course
      );
    }

  }

  save() {
    if (this.course.id) {
       this.translationService.updateCourse(this.course).subscribe(
         () => this.notyService.addSuccess('Course updated')
       );
    } else {
      this.saving = true;
      this.translationService.addCourse(this.course).subscribe(
        course => {
          this.saving = false;
          if (course) {
            this.course = course;
            this.notyService.addSuccess('New Course added');
          }
        }
      );
    }
  }

  addChapter() {
    this.course.chapters.push(new Chapter());
  }

  removeChapter(chapter:Chapter) {
    this.course.chapters.forEach((value,index) => {
      if (value === chapter) {
        this.course.chapters.splice(index,1);
      }
    });
  }

}
