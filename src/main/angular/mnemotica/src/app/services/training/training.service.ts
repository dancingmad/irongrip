import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotyService} from '../noty.service';
import {Observable, Subject} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {TrainingConfiguration} from './model/trainingconfiguration';
import {Training} from './model/training';

@Injectable({
  providedIn: 'root'
})

export class TrainingService {

  private trainingUrl = '/api/training';

  private loading = new Subject<Boolean>();

  private trainings = new Subject<Training[]>();


  constructor(private http:HttpClient,
              private notyService: NotyService) {
  }

  getLoadingListener(): Observable<Boolean> {
    return this.loading.asObservable();
  }

  updateTrainingList() {
    this.http.get<Training[]>(this.trainingUrl+'/').pipe(
      tap(() => this.loading.next(true)),
      catchError(this.notyService.handleError('Could not fetch Trainings',[])),
      finalize(() => this.loading.next(false))
    ).subscribe(t => this.trainings.next(t));
  }

  getTrainingSubscription():Observable<Training[]> {
    return this.trainings.asObservable();
  }

  addTraining(config:TrainingConfiguration):Observable<Training> {
    // POST for adding entity to collection, it is NOT idempotent
    return this.http.post<Training>(this.trainingUrl+'/',config).pipe(
      tap(() => this.updateTrainingList()),
      catchError(this.notyService.handleError('Could not add Training',null))
    );
  }

  closeTraining(training:Training):Observable<Training> {
    return this.http.post(this.trainingUrl+'/'+training.id+'/close',{}).pipe(
      tap(() => this.updateTrainingList()),
      catchError(this.notyService.handleError('Could not close Training', null))
    );
  }

  static listDirections():string[] {
    return ['FROM','TO','BOTH'];
  }


  getTraining(trainingId: number):Observable<Training>{
    return this.http.get<Training>(this.trainingUrl+'/'+trainingId);
  }
}
