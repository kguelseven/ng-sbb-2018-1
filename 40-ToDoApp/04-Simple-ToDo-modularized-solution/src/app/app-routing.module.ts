import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './todos/components/overview/overview.component';


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'done', loadChildren: './todos/components/done-todos/done-todos.module#DoneModule' },
  { path: 'details', loadChildren: './todos/components/todo-details/todo-details.module#TodoDetailsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
