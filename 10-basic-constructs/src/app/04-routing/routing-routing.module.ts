import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RoutedComponent} from './01-route-snapshot/routed.component';
import {OtherComponent} from './01-route-snapshot/other.component';
import {RoutedObservableComponent} from './02-route-observable/routed.component';


const routingRoutes: Routes = [

  {path: 'route-snapshot/:detailNumber', component: RoutedComponent},
  {path: 'other-snapshot/:detailNumber', component: OtherComponent},
  {path: 'route-observable/:detailNumber', component: RoutedObservableComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(routingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRoutingModule { }
