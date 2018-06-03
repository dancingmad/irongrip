import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from '../hero/heroes/hero';
import {MessageService} from '../hero/services/message.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private userUrl = 'api/user/';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  getLoggedInUser(): Observable<User> {
    const url = `${this.userUrl}`;
    this.messageService.addMessage(`UserService: fetched logged in user from ${url}`);
    return this.http.get<User>(url);
  }

  authenticate(username: string, password: string): Observable<User> {
    const url = `${this.userUrl}${username}/authentication?password=${password}`;
    this.messageService.addMessage(`UserService: authenticating user ${username}`);
    return this.http.get<User>(url);
  }

  register(username: string, password: string): Observable<User> {
    const url = `${this.userUrl}`;
    this.messageService.addMessage(`UserService: Registering user ${username}`);
    return this.http.post<User>(url, { username: username, password: password }, this.httpOptions);
  }

}

