import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslationsComponent} from '../components/translation/translations/translations.component';
import {LoginComponent} from '../components/login/login.component';
import {HomeComponent} from '../components/translation/home/home.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {CourseComponent} from '../components/translation/course/course.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'translations', component: TranslationsComponent },
    { path: 'course/:id', component: CourseComponent },
    { path: '', redirectTo: '/translations', pathMatch: 'full'}
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
