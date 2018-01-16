import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {Observable} from 'rxjs/Observable';
import {IAppState} from '../../../store/todo.store';
import {Store} from '@ngrx/store';
import {CompleteToDo, CreateToDo, LoadToDos} from '../../../store/todo.actions';

@Component({
  selector: 'td-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {

  pendingTodos$: Observable<ToDo[]>;
  doneTodos$: Observable<ToDo[]>;

  constructor(private store: Store<{ todos: IAppState }>) {
    this.pendingTodos$ = this.store.select('todos', 'pendingTodos');
    this.doneTodos$ = this.store.select('todos', 'doneTodos');
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadToDos());
  }

  addToDo(todo: ToDo) {
    this.store.dispatch(new CreateToDo(todo));
  }

  completeToDo(todo: ToDo) {
    this.store.dispatch(new CompleteToDo(todo));
  }

}
