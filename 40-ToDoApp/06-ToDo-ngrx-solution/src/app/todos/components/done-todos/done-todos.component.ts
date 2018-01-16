import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../../../store/todo.store';
import {Store} from '@ngrx/store';
import {LoadToDos, RemoveToDo} from '../../../store/todo.actions';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-todos.component.html',
})
export class DoneTodosComponent implements OnInit {

  doneTodos$: Observable<ToDo[]>;

  constructor(private store: Store<{ todos: IAppState }>) {
    this.doneTodos$ = this.store.select('todos', 'doneTodos');
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadToDos());
  }

  removeToDo(todo: ToDo) {
    this.store.dispatch(new RemoveToDo(todo));
  }

}
