import { Component, OnInit } from '@angular/core';
import {KatwarnService} from '../service/katwarn.service';
import {ActivatedRoute} from '@angular/router';
import {KatWarning} from '../service/katwarning';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-katlist',
  templateUrl: './katlist.component.html',
  styleUrls: ['./katlist.component.css']
})
export class KatlistComponent implements OnInit {

  katWarnings: KatWarning[];

  constructor(private katwarnService: KatwarnService) { }

  ngOnInit() {
    return this.katwarnService.getKatWarnings().subscribe(
      katWarnings => this.katWarnings = katWarnings
    );
  }

  getKatWarnings(): KatWarning[] {
    return this.katWarnings;
  }

  parseWarning(katwarn: KatWarning) {
    if (katwarn && katwarn.type === 'default') {
      return `In der Zeit zwischen ${katwarn.fromTime} und ${katwarn.toTime} Uhr werden heute in ` +
      ` ${katwarn.locationId} Windstärken über ${katwarn.expectedWind} km/h erwartet.`+
        ` Derzeit beträgt die Windstärke ${katwarn.currentWind} km/h.`;
    } else {
      return '';
    }
  }
}
