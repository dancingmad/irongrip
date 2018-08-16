import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../services/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(
      user => this.user = user
    );
  }

}
