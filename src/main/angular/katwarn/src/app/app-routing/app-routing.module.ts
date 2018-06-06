import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KatComponent} from '../kat/kat.component';
import {KatlistComponent} from '../katlist/katlist.component';


const routes: Routes = [
  { path: ':env/kat/:locationId' , component: KatComponent },
  { path: ':env' , component: KatlistComponent },
  { path: '' , redirectTo: 'test', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
