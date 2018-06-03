import { Component, OnInit } from '@angular/core';
import {UserService} from '../../login/user.service';
import {User} from '../../login/user';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(u => this.user = u);
  }



}
