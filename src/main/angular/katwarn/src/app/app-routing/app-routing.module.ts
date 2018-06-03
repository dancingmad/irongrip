import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KatComponent} from '../kat/kat.component';
import {KatlistComponent} from '../katlist/katlist.component';


const routes: Routes = [
  { path: 'kat/:id' , component: KatComponent },
  { path: 'list' , component: KatlistComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
