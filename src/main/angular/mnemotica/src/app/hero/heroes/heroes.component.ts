import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from '../services/hero.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
     this.heroService = heroService;
  }

  ngOnInit() {
    return this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }


}
