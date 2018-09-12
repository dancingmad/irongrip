

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TranslationsComponent } from './components/translation/translations/translations.component';
import { NotyComponent } from './components/noty/noty.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/translation/home/home.component';
import { CourseComponent } from './components/translation/course/course.component';
import { TranslationentryComponent } from './components/translation/translationentry/translationentry.component';
import {FilterLanguagePipe} from './components/translation/translations/filter-language.pipe';
import {BsDropdownModule, TypeaheadModule}from 'ngx-bootstrap';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TranslationsComponent,
    NotyComponent,
    ProfileComponent,
    HomeComponent,
    CourseComponent,
    TranslationentryComponent,
    FilterLanguagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
