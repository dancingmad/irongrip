import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MessageService} from '../hero/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit() {
     this.userService.getLoggedInUser().subscribe(user => {
       this.location.go(`${user.username}/translations`);
     });
  }



  authenticate(username: string, password: string) {
     this.userService.authenticate(username, password).subscribe(
       user =>  this.location.go(`${user.username}/translations`),
       error => this.messageService.addMessage(`Login failed for user ${username}: ${error.message}`)
     );
  }

  register(username: string, password: string) {
    this.userService.register(username, password).subscribe(
      user =>  this.location.go(`${user.username}/translations`),
      error => this.messageService.addMessage(`Could not register user ${username}: ${error.message}`)
    );
  }

}
