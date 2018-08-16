import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslationsComponent} from '../translation/translations/translations.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'translations', component: TranslationsComponent },
    { path: ':course//translations', component: TranslationsComponent },
    { path: ':course/:chapter/translations', component: TranslationsComponent },
    { path: '', redirectTo: '/translations', pathMatch: 'full'}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
