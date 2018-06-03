import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroes/hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../services/hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private heroService: HeroService) {
  }

  ngOnInit() {
     this.getHero();
  }

  getHero(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param === 'new') {
      this.hero = {} as Hero;
    } else {
      const id = +param;
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }
  }

  save(): void {
    this.heroService.updateHero(this.hero).subscribe(
      () => this.goBack());
  }

  add(heroName: string): void {
    this.heroService.addHero({id: null, name: heroName} as Hero).subscribe(
      hero => this.hero = hero
    );
  }

  goBack(): void {
    this.location.back();
  }
}
