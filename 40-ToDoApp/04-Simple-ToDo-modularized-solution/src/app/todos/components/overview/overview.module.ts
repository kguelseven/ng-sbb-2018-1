import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {OverviewComponent} from './overview.component';
import {NewTodoComponent} from './new-todo/new-todo.component';

@NgModule({
  declarations: [
    OverviewComponent,
    NewTodoComponent
  ],
  exports: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
})
export class OverviewModule { }
