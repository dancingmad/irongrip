import { Component, OnInit } from '@angular/core';
import {KatwarnService} from '../service/katwarn.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {KatLocationService} from '../service/kat-location.service';
import {KatLocation} from '../service/katlocation';

@Component({
  selector: 'app-mapselector',
  templateUrl: './mapselector.component.html',
  styleUrls: ['./mapselector.component.css']
})
export class MapselectorComponent implements OnInit {

  locations: KatLocation[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private katLocationService: KatLocationService,
              private katWarnService: KatwarnService) { }

  ngOnInit() {
    this.locations = this.katLocationService.getLocations();
    // get all active warnings to add colors
    // check route to see which is
    this.locations.forEach(loc => loc.active = false);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateLocations();
      }
    });
  }

  updateLocations() {
    this.katWarnService.getKatWarnings().subscribe(
      warnings => {
        const warnLocations = warnings.map(warn => warn.locationId);
        this.locations.forEach(loc => {
          loc.active = (warnLocations.indexOf(loc.locationId) > -1);
        });
      });
  }


  openLocation(loc: KatLocation) {
    this.router.navigate(['/kat', loc.locationId]);
  }

}
