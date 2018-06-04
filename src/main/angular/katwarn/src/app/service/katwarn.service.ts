import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {KatWarning} from './katwarning';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KatwarnService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private katwarnUrl = 'api/katwarn/';  // URL to web api

  constructor(private http: HttpClient) { }

  getKatWarnings(): Observable<KatWarning[]> {
    return this.http.get<KatWarning[]>(this.katwarnUrl);
  }

  getKatWarning(id: number): Observable<KatWarning> {
    const detailUrl = `${this.katwarnUrl}${id}`;
    return this.http.get<KatWarning>(detailUrl);
  }

  updateKatWarning(katWarning: KatWarning) {
     // do update
    const warningUrl = `${this.katwarnUrl}${katWarning.id}`;
    this.http.put<KatWarning>(warningUrl, katWarning).subscribe();
  }

  createKatWarning(katWarning: KatWarning): Observable<KatWarning> {
    const detailUrl = `${this.katwarnUrl}`;
    return this.http.post<KatWarning>(this.katwarnUrl, katWarning);
  }

  deleteKatWarning(katWarning: KatWarning) {
    const detailUrl = `${this.katwarnUrl}${katWarning.id}`;
    this.http.delete<KatWarning>(detailUrl).subscribe();
  }
}