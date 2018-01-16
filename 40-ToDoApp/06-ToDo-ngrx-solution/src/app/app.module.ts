import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './todos/components/overview/overview.component';
import { NewTodoComponent } from './todos/components/new-todo/new-todo.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoItemComponent } from './todos/components/todo-item/todo-item.component';
import { DoneTodosComponent } from './todos/components/done-todos/done-todos.component';
import {initialState, todoReducer} from './store/todo.store';
import {EffectsModule} from '@ngrx/effects';
import {ToDoEffects} from './store/todo.effects';
import {ToDoService} from './todos/model/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DoneTodosComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(<any>{todos: todoReducer}, {initialState}),
    EffectsModule.forRoot([ToDoEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
