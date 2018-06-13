import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from './service/env.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router,
              private env: EnvironmentService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.env.setEnvironment(event.url.startsWith('/live')?'live':'test');
      }
    });
  }

  getEnvironment(): string {
    return this.env.getEnvironment();
  }

  setEnvironment(env: string) {
    this.env.setEnvironment(env);
  }
}
