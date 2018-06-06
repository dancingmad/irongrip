import {Injectable} from '@angular/core';
import {KatLocation} from './katlocation';

@Injectable({
  providedIn: 'root'
})
export class KatLocationService {

  locations: KatLocation[] = [
    {x:308, y: 45, name: 'Neusiedl', locationId: 'Neusiedl'} as KatLocation,
    {x:330, y: 88, name: 'Weiden', locationId: 'Weiden'} as KatLocation,
    {x:297, y: 197, name: 'Podersdorf', locationId: 'Podersdorf'} as KatLocation,
    {x:217, y: 316, name: 'Illmitz-Hölle', locationId: 'Illmitz-Hölle'} as KatLocation,
    {x:187, y: 402, name: 'Illmitz', locationId: 'Illmitz'} as KatLocation,
    {x:100, y: 489, name: 'Fertörakos', locationId: 'Fertörakos'} as KatLocation,
    {x:87, y: 374, name: 'Mörbisch', locationId: 'Mörbisch'} as KatLocation,
    {x:110, y: 318, name: 'Rust', locationId: 'Rust'} as KatLocation,
    {x:134, y: 230, name: 'Oggau', locationId: 'Oggau'} as KatLocation,
    {x:173, y: 97, name: 'Purbach', locationId: 'Purbach'} as KatLocation,
    {x:200, y: 68, name: 'Breitenbrunn', locationId: 'Breitenbrunn'} as KatLocation
  ];

  constructor() {
  }

  getLocations(): KatLocation[] {
    return this.locations;
  }

}
