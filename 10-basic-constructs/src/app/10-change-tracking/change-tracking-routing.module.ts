import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChangeTrackingAppComponent} from './01-simple/change-tracking-app.component';
import {MessyChangeTrackingAppComponent} from './02-messy/change-tracking-app/change-tracking-app.component';
import {ObservableChangeTrackingAppComponent} from './03-observable/change-tracking-app/change-tracking-app.component';
import {NgrxChangeTrackingAppComponent} from './04-ngrx/change-tracking-app/change-tracking-app.component';

const advancedRoutes: Routes = [

  {path: 'simple', component: ChangeTrackingAppComponent},
  {path: 'messy', component: MessyChangeTrackingAppComponent},
  {path: 'observable', component: ObservableChangeTrackingAppComponent},
  {path: 'ngrx', component: NgrxChangeTrackingAppComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(advancedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChangeTrackingRoutingModule { }
