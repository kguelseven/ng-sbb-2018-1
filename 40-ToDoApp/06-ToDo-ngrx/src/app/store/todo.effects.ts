import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {ToDoService} from '../todos/model/todo.service';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {
  COMPLETE_TODO, CompleteToDo, CREATE_TODO, CreateToDo, CreateToDoFail, CreateToDoSuccess, LOAD_TODOS, LoadToDosFail,
  LoadToDosSuccess, REMOVE_TODO
} from './todo.actions';

@Injectable()
export class ToDoEffects {
  constructor(private actions$: Actions,
              private toDoService: ToDoService) {
  }

  @Effect()
  loadToDos$ = this.actions$.ofType(LOAD_TODOS).pipe(
    switchMap(() => {
      return this.toDoService
        .getTodos()
        .pipe(
          map(todos => (new LoadToDosSuccess(todos))),
          catchError(error => of(new LoadToDosFail(error)))
        );
    })
  );

  @Effect()
  createToDo$ = this.actions$.ofType(CREATE_TODO).pipe(
    map((action: CreateToDo) => action.payload),
    switchMap(todo => {
      return this.toDoService
        .saveTodo(todo)
        .pipe(
          map(savedToDo => (new CreateToDoSuccess(savedToDo))),
          catchError(error => of(new CreateToDoFail(error)))
        );
    })
  );

  @Effect({dispatch: false})
  updateToDo$ = this.actions$.ofType(COMPLETE_TODO).pipe(
    map((action: CompleteToDo) => action.payload),
    switchMap(todo => {
      todo.completed = true;
      return this.toDoService
        .updateTodo(todo);
    })
  );

}
