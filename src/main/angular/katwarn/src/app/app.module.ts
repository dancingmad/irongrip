import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapselectorComponent } from './mapselector/mapselector.component';
import { KatlistComponent } from './katlist/katlist.component';
import { KatComponent } from './kat/kat.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap';
import { setTheme } from 'ngx-bootstrap/utils';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MapselectorComponent,
    KatlistComponent,
    KatComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    setTheme('bs4');
  }

}
