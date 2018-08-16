import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NotyService} from '../noty.service';
import {Observable} from 'rxjs';
import {Course} from './course';
import {Chapter} from './chapter';
import {Translation} from './translation';
import {TranslationTag} from './translationtag';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private courseUrl = '/api/course';
  private chapterUrl = '/api/chapter';
  private translationUrl = '/api/translation';
  private translationTagUrl = '/api/tag';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient,
              private notyService: NotyService) {
  }

  listCourses():Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl+'/').pipe(
      catchError(this.notyService.handleError('Could not fetch Courses',[]))
    );
  }

  addCourse(course:Course):Observable<Course> {
    // POST for adding entity to collection, it is NOT idempotent
    return this.http.post<Course>(this.courseUrl+'/',course).pipe(
      catchError(this.notyService.handleError('Could not add Course'))
    );
  }

  deleteCourse(course:Course):Observable<Course> {
    return this.http.delete<Course>(this.courseUrl+'/'+course.id).pipe(
      catchError(this.notyService.handleError('Could not delete Course'))
    );
  }

  addChapter(chapter:Chapter):Observable<Chapter> {
    // POST for adding entity to collection, it is NOT idempotent
    return this.http.post<Chapter>(this.chapterUrl+'/',chapter).pipe(
      catchError(this.notyService.handleError('Could not add Chapter'))
    );
  }

  updateChapter(chapter:Chapter):Observable<Chapter> {
    return this.http.put<Chapter>(this.chapterUrl+'/'+chapter.id,chapter).pipe(
      catchError(this.notyService.handleError('Could not update Chapter'))
    );
  }

  deleteChapter(chapter:Chapter):Observable<Chapter> {
    return this.http.delete<Chapter>(this.chapterUrl+'/'+chapter.id).pipe(
      catchError(this.notyService.handleError('Could not delete Chapter'))
    );
  }

  listTranslations():Observable<Translation[]> {
    // TODO  add query params for limit, sort order and filters since we will get all translations otherwise
    return this.http.get<Translation[]>(this.translationUrl+'/').pipe(
      catchError(this.notyService.handleError('Could not fetch Translations',[]))
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

  deleteTranslation(translation:Translation):Observable<Translation> {
    return this.http.delete<Translation>(this.translationUrl+'/'+translation.id).pipe(
      catchError(this.notyService.handleError('Could not delete Translation'))
    );
  }

  listTranslationTags():Observable<TranslationTag[]> {
    return this.http.get<TranslationTag[]>(this.translationTagUrl+'/').pipe(
      catchError(this.notyService.handleError('Could not fetch Translationtags',[]))
    );
  }

  listLanguages():string[] {
    return ['JAPANESE_KANJI', 'JAPANESE_KANA', 'JAPANESE_ROMAJI', 'ENGLISH', 'SWEDISH', 'GERMAN', 'DUTCH'];
  }

}
