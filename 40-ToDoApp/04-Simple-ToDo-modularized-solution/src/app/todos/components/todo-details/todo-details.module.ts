import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToDoDetailsRoutingModule} from './todo-details-routing.module';
import {TodoDetailsComponent} from './todo-details.component';

@NgModule({
  declarations: [
    TodoDetailsComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToDoDetailsRoutingModule
  ],
  providers: [],
})
export class TodoDetailsModule { }
