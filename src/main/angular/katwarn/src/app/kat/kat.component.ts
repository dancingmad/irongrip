import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {KatwarnService} from '../service/katwarn.service';
import {KatWarning} from '../service/katwarning';
import {KatLocation} from '../service/katlocation';
import {KatLocationService} from '../service/kat-location.service';

@Component({
  selector: 'app-kat',
  templateUrl: './kat.component.html',
  styleUrls: ['./kat.component.css']
})
export class KatComponent implements OnInit {

  locations: KatLocation[];

  katWarning: KatWarning = new KatWarning();
  availableLocations: KatLocation[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private katwarnService: KatwarnService,
              private katLocationService: KatLocationService) {
  }

  ngOnInit() {
    this.getLocations();
    this.getKatWarning();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getKatWarning();
      }
    });

  }

  getLocations() {
    this.locations = this.katLocationService.getLocations();
  }

  getKatWarning() {
    const locationId = this.route.snapshot.paramMap.get('locationId');
    this.katWarning.locationId = locationId;
    if (locationId === 'new') {
      this.getAvailableLocations('');
    } else {
      this.katwarnService.getKatWarning(locationId)
        .subscribe(katwarn => {
          if (katwarn) {
            this.katWarning = katwarn;
          } else {
            this.katWarning = {locationId: locationId} as KatWarning;
          }
          this.getAvailableLocations(this.katWarning.locationId);
        });
    }
  }

  getAvailableLocations(selectedLocationId) {
    this.katwarnService.getKatWarnings().subscribe(
      katWarnings => {
        const existingLocations = katWarnings.map(warn => warn.locationId);
        this.availableLocations = [];
        this.locations.forEach(location => {
           if (existingLocations.indexOf(location.locationId) < 0 || location.locationId === selectedLocationId) {
            this.availableLocations.push(location);
          }
        });
      }
    );
  }

  update() {
    this.katwarnService.updateKatWarning(this.katWarning);
  }

  cancel() {
    this.katwarnService.deleteKatWarning(this.katWarning);
    this.location.back();
  }

  create() {
    this.katwarnService.createKatWarning(this.katWarning).subscribe(
      katWarn => this.katWarning = katWarn
    );
  }

}
