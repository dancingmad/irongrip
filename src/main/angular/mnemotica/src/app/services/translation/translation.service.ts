import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NotyService} from '../noty.service';
import {Observable, Subject} from 'rxjs';
import {Course}from './model/course';
import {Chapter}from './model/chapter';
import {Translation}from './model/translation';
import {TranslationTag}from './model/translationtag';
import {catchError, finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private courseUrl = '/api/course';
  private chapterUrl = '/api/chapter';
  private translationUrl = '/api/translation';
  private translationTagUrl = '/api/tag';

  private loading = new Subject<Boolean>();

  private courses = new Subject<Course[]>();
  private tags = new Subject<TranslationTag[]>();

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient,
              private notyService: NotyService) {
  }

  getLoadingListener(): Observable<Boolean> {
    return this.loading.asObservable();
  }

  updateCourseList() {
    this.http.get<Course[]>(this.courseUrl+'/').pipe(
      tap(() => this.loading.next(true)),
      catchError(this.notyService.handleError('Could not fetch Courses',[])),
      finalize(() => this.loading.next(false))
    ).subscribe(cs => this.courses.next(cs));
  }

  getCourseSubscription():Observable<Course[]> {
    // we propagate the result to all who listen in
    return this.courses.asObservable();
  }

  addCourse(course:Course):Observable<Course> {
    // POST for adding entity to collection, it is NOT idempotent
    return this.http.post<Course>(this.courseUrl+'/',course).pipe(
      catchError(this.notyService.handleError('Could not add Course'))
    );
  }

  getCourse(id:number):Observable<Course> {
    return this.http.get<Course>(this.courseUrl+'/'+id).pipe(
      catchError(this.notyService.handleError('Could not find Course'))
    );
  }

  deleteCourse(id:number):Observable<Course> {
    return this.http.delete<Course>(this.courseUrl+'/'+id).pipe(
      catchError(this.notyService.handleError('Could not delete Course'))
    );
  }

  getTranslation(id:number):Observable<Translation> {
    return this.http.get<Translation>(this.translationUrl+'/'+id).pipe(
      catchError(this.notyService.handleError('Could not find Translation'))
    );
  }

  updateCourse(course:Course):Observable<Course> {
    return this.http.put<Course>(this.courseUrl+'/'+course.id,course).pipe(
      tap(() => this.loading.next(true)),
      catchError(this.notyService.handleError('Could not update Course')),
      finalize(() => this.loading.next(false))
    );
  }

  updateChapter(chapter:Chapter):Observable<Chapter> {
    return this.http.put<Chapter>(this.chapterUrl+'/'+chapter.id,chapter).pipe(
      catchError(this.notyService.handleError('Could not update Chapter'))
    );
  }


  addTranslation(translation:Translation):Observable<Translation> {
    // POST for adding entity to collection, it is NOT idempotent
    return this.http.post<Translation>(this.translationUrl+'/',translation).pipe(
      catchError(this.notyService.handleError('Could not add Translation'))
    );
  }

  updateTranslation(translation:Translation):Observable<Translation> {
    return this.http.put<Translation>(this.translationUrl+'/'+translation.id,translation).pipe(
      catchError(this.notyService.handleError('Could not update Translation'))
    );
  }

  subscribeTranslationTags():Observable<TranslationTag[]> {
    return this.tags.asObservable();
  }

  listTranslationTags():Observable<TranslationTag[]> {
    return this.http.get<TranslationTag[]>(this.translationTagUrl+'/').pipe(
      tap( t => this.tags.next(t)),
      catchError(this.notyService.handleError('Could not fetch Translationtags',[]))
    );
  }

  addTranslationTag(tag:TranslationTag):Observable<TranslationTag> {
    return this.http.post<TranslationTag>(this.translationTagUrl+'/',tag).pipe(
      catchError(this.notyService.handleError('Could not add Tag'))
    );
  }

  listLanguages():string[] {
    return ['JAPANESE_KANJI', 'JAPANESE_KANA', 'JAPANESE_ROMAJI', 'ENGLISH', 'SWEDISH', 'GERMAN', 'DUTCH'];
  }

  getChapter(id: number):Observable<Chapter> {
    return this.http.get<Chapter>(this.chapterUrl+'/'+id).pipe(
      catchError(this.notyService.handleError('Could not find Chapter'))
    );
  }
}
