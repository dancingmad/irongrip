import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './services/user';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(private userService: UserService,
              translate: TranslateService,
              private route: ActivatedRoute,
              private location: Location) {
    this.fetchUser();
    translate.setDefaultLang('en');
    translate.use('en');
  }

  fetchUser() {
    this.userService.getLoggedInUser().subscribe(user => this.user = user);
  }

  logout() {
    this.userService.logout();
  }

  openProfile() {
    this.location.go('/profile');
  }

}
