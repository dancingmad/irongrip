import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KatWarning} from './katwarning';
import {Observable} from 'rxjs';
import {EnvironmentService} from './env.service';

@Injectable({
  providedIn: 'root'
})
export class KatwarnService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private katwarnUrl = 'api/katwarn/';  // URL to web api

  constructor(private http: HttpClient,
              private env: EnvironmentService) {
  }

  getKatWarnings(): Observable<KatWarning[]> {
    return this.http.get<KatWarning[]>(this.env.getEnvironment() + '/' + this.katwarnUrl);
  }

  getKatWarning(locationId: string): Observable<KatWarning> {
    const detailUrl = `${this.env.getEnvironment()}/${this.katwarnUrl}${locationId}`;
    return this.http.get<KatWarning>(detailUrl);
  }

  updateKatWarning(katWarning: KatWarning): Observable<KatWarning> {
     // do update
    return this.http.put<KatWarning>(this.env.getEnvironment() + '/' + this.katwarnUrl, katWarning);
  }

  createKatWarning(katWarning: KatWarning): Observable<KatWarning> {
    return this.http.post<KatWarning>(this.env.getEnvironment() + '/' + this.katwarnUrl, katWarning);
  }

  deleteKatWarning(katWarning: KatWarning): Observable<KatWarning> {
    const detailUrl = `${this.env.getEnvironment()}/${this.katwarnUrl}${katWarning.locationId}`;
    return this.http.delete<KatWarning>(detailUrl);
  }
}
