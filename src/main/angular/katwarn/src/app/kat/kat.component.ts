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

  message: string;
  progress: boolean = false;
  newMode: boolean = false;

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
    if (locationId === 'new') {
      this.newMode = true;
      this.getAvailableLocations();
    } else {
      this.katWarning.locationId = locationId;
      this.katwarnService.getKatWarning(locationId)
        .subscribe(katwarn => {
          if (katwarn) {
            this.katWarning = katwarn;
          } else {
            this.katWarning = {locationId: locationId} as KatWarning;
          }
        });
    }
  }

  getAvailableLocations() {
    this.katwarnService.getKatWarnings().subscribe(
      katWarnings => {
        const existingLocations = katWarnings.map(warn => warn.locationId);
        this.availableLocations = [];
        this.locations.forEach(location => {
           if (existingLocations.indexOf(location.locationId) < 0) {
            this.availableLocations.push(location);
          }
        });
      }
    );
  }

  update() {
    this.progress = true;
    this.message = '';
    this.katwarnService.updateKatWarning(this.katWarning).subscribe(
      result => { this.router.navigateByUrl('/'); },
      error => { this.message = 'Fehler beim Aktualisiern der Warnung:' + error.statusText; this.progress = false; }
    );
  }

  cancel() {
    this.progress = true;
    this.message = '';
    this.katwarnService.deleteKatWarning(this.katWarning).subscribe(
      result => { this.router.navigateByUrl('/'); },
      error => { this.message = 'Fehler beim Aufheben der Warnung:' + error.statusText; this.progress = false; }
      );
  }

  create() {
    this.progress = true;
    this.message = '';
    this.katwarnService.createKatWarning(this.katWarning).subscribe(
      result => { this.router.navigateByUrl('/'); },
      error => { this.message = 'Fehler beim Anlegen der Warnung:' + error.statusText; this.progress = false; }
    );
  }

}
