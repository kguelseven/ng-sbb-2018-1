import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoDetailsComponent} from './todo-details.component';


const todoDetailsRoutes: Routes = [
    { path: ':id', component: TodoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(todoDetailsRoutes)],
  exports: [RouterModule]
})
export class ToDoDetailsRoutingModule { }
