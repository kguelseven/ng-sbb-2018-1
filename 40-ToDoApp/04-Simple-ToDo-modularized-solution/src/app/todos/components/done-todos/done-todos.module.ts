import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {DoneTodosComponent} from './done-todos.component';
import {RouterModule} from '@angular/router';
import {routing} from './done-todos-routing.module';

@NgModule({
  declarations: [
    DoneTodosComponent,
  ],
  exports: [
    DoneTodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    routing
  ],
  providers: [],
})
export class DoneModule { }
