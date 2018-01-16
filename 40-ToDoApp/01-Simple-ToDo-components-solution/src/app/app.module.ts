import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './todos/components/overview/overview.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/components/todo-item/todo-item.component';
import { DoneTodosComponent } from './todos/components/done-todos/done-todos.component';
import {ToDoService} from './todos/model/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    DoneTodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // providers: [],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
