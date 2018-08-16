import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../services/user';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  language = 'en';

  constructor(private userService:UserService,
              private translate:TranslateService) {
  }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => {
      this.user = u;
    });
  }

  onChangeLanguage() {
    this.translate.use(this.language);
  }

}
