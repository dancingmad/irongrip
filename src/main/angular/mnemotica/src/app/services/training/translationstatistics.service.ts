import{Injectable}from'@angular/core';
import {Observable, Subject}from 'rxjs';
import {HttpClient}from '@angular/common/http';
import {NotyService}from '../noty.service';
import {Training}from './model/training';
import {catchError, finalize, tap}from 'rxjs/operators';
import {TranslationRun}from './model/translationrun';
import {TranslationStatistics}from './model/translationstatistics';


@Injectable({
  providedIn: 'root'
})
export class TranslationStatisticsService {

  private statisticsUrl = '/api/statistics/translation';

  private loading = new Subject<Boolean>();


  constructor(private http:HttpClient,
              private notyService: NotyService) {
  }

  getLoadingListener(): Observable<Boolean> {
    return this.loading.asObservable();
  }

  addTranslationRun(trainingId:number, translationId:number, run:TranslationRun):Observable<Training> {
    return this.http.post<Training>(this.statisticsUrl+'/'+trainingId+'/'+translationId,run).pipe(
      catchError(this.notyService.handleError('Could not add Translation Run'))
    );
  }

  getTranslationStatistics(translationId:number): Observable<TranslationStatistics> {
    return this.http.get<TranslationStatistics>(this.statisticsUrl+'/'+translationId).pipe(
      catchError(this.notyService.handleError('Could not fetch Statistics'))
    );
  }

  fetchNextStatistics(trainingId:number): Observable<TranslationStatistics[]> {
      return this.fetchNextStatisticsData(this.statisticsUrl + '/?trainingId=' + trainingId);
  }

  listStatistics(): Observable<TranslationStatistics[]> {
    return this.fetchNextStatisticsData(this.statisticsUrl + '/');
  }

  private fetchNextStatisticsData(url:string) {
    return this.http.get<TranslationStatistics[]>(url).pipe(
      tap(() => this.loading.next(true)),
      catchError(this.notyService.handleError('Could not fetch next Statistics',[])),
      finalize(() => this.loading.next(false))
    );

  }
}
