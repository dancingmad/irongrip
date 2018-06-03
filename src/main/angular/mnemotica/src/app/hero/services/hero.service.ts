import { Injectable } from '@angular/core';
import {Hero} from '../heroes/hero';
import {HEROES} from '../heroes/mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private heroesUrl = 'api/hero/';  // URL to web api


  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Fetching Heroes List');
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
        tap(heroes => this.messageService.addMessage(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}${id}`;
    this.messageService.addMessage(`HeroService: fetched hero from ${url}`);
    return this.http.get<Hero>(url);
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.addMessage(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateHero(hero: Hero) {
      const url = `${this.heroesUrl}${hero.id}`;
      return this.http.put(url, hero, this.httpOptions).pipe(
        tap(() => this.messageService.addMessage(`Updated Hero with id ${hero.id}`)),
        catchError(this.handleError('updateHero', hero))
      );
  }

  addHero(hero: Hero): Observable<Hero> {
     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
       tap( addedHero => this.messageService.addMessage(`Added Hero with id ${addedHero.id}`)),
       catchError(this.handleError('addHero', hero))
     );
  }
}
