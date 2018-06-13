import { Component, OnInit } from '@angular/core';
import {KatwarnService} from '../service/katwarn.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {KatWarning} from '../service/katwarning';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../service/env.service';

@Component({
  selector: 'app-katlist',
  templateUrl: './katlist.component.html',
  styleUrls: ['./katlist.component.css']
})
export class KatlistComponent implements OnInit {

  katWarnings: KatWarning[];
  loading = false;
  errorMessage = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private env: EnvironmentService,
              private katwarnService: KatwarnService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initKatWarnings();
      }
    });
    this.initKatWarnings();
  }

  initKatWarnings() {
    this.loading = true;
    this.errorMessage = '';
    this.katwarnService.getKatWarnings().subscribe(
      katWarnings => {
        this.katWarnings = katWarnings.filter(warn => warn.locationId);
        this.loading = false;
      }, error => {
            this.loading = false;
            this.errorMessage = error.statusText;
      }
    );
  }

  getKatWarnings(): KatWarning[] {
    return this.katWarnings;
  }


}
