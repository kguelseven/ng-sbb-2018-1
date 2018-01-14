import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RoutingRoutingModule} from './routing-routing.module';
import {RoutedComponent} from './01-route-snapshot/routed.component';
import {OtherComponent} from './01-route-snapshot/other.component';
import {RoutedObservableComponent} from './02-route-observable/routed.component';

@NgModule({
  declarations: [
    RoutedComponent, OtherComponent,
    RoutedObservableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule {}
