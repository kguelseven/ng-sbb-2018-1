import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangeTrackingRoutingModule} from './change-tracking-routing.module';
import {ChangeTrackingAppComponent} from './01-simple/change-tracking-app.component';
import {MessyChangeTrackingAppComponent} from './02-messy/change-tracking-app/change-tracking-app.component';
import {ChangeTrackingChildComponent} from './02-messy/change-tracking-child/change-tracking-child.component';
import {ObservableChangeTrackingAppComponent} from './03-observable/change-tracking-app/change-tracking-app.component';
import {ObservingChildComponent} from './03-observable/change-tracking-child/change-tracking-child.component';
import {NgrxChangeTrackingAppComponent} from './04-ngrx/change-tracking-app/change-tracking-app.component';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './04-ngrx/model/AppReducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    ChangeTrackingRoutingModule,
    StoreModule.forRoot(<any>{app: appReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    ChangeTrackingAppComponent,
    MessyChangeTrackingAppComponent,
    ChangeTrackingChildComponent,
    ObservableChangeTrackingAppComponent,
    ObservingChildComponent,
    NgrxChangeTrackingAppComponent
  ]
})
export class ChangeTrackingModule {}
