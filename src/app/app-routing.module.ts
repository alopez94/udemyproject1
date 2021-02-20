import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//router

import {AboutComponent} from './about/about.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
