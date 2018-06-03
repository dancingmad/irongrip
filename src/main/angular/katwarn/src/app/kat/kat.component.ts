import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {KatwarnService} from '../service/katwarn.service';
import {KatWarning} from '../service/katwarning';

@Component({
  selector: 'app-kat',
  templateUrl: './kat.component.html',
  styleUrls: ['./kat.component.css']
})
export class KatComponent implements OnInit {

  locations: string[] = [
    'Mörbisch',
    'Rust',
    'Eisenstadt'
  ];

  katWarning: KatWarning = new KatWarning();
  availableLocations: string[] = [];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private katwarnService: KatwarnService) {
  }

  ngOnInit() {
    this.getKatWarning();
  }

  getKatWarning() {
    const param = this.route.snapshot.paramMap.get('id');
    const id = +param;
    if (id >= 0) {
      this.katwarnService.getKatWarning(id)
        .subscribe(katwarn => {
          this.katWarning = katwarn;
          this.getAvailableLocations(this.katWarning.locationId);
        });
    } else {
      this.getAvailableLocations('');
    }
  }

  getAvailableLocations(selectedLocationId) {
    this.katwarnService.getKatWarnings().subscribe(
      katWarnings => {
        const existingLocations = katWarnings.map(warn => warn.locationId);
        this.availableLocations = [];
        this.locations.forEach(location => {
           if (existingLocations.indexOf(location) < 0 || location === selectedLocationId) {
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
