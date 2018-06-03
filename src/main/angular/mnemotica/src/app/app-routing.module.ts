import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './hero/heroes/heroes.component';
import {DashboardComponent} from './hero/dashboard/dashboard.component';
import {HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import {TranslationsComponent} from './translation/translations/translations.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'detail/:id' , component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: ':username/translations', component: TranslationsComponent },
    { path: ':username/:course//translations', component: TranslationsComponent },
    { path: ':username/:course/:chapter/translations', component: TranslationsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
