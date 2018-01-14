import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {map, filter, catchError} from 'rxjs/operators'; // lettable operators are new since RxJS 5.5

const backendUrl = 'http://localhost:3456/todos';

@Injectable()
export class ToDoService {

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<ToDo[]> {
    return this.http.get(backendUrl)
      .pipe(
        map(
          (res: any) => res.data.map((r) => {
            const todo = new ToDo(r.title);
            todo.completed = r.completed;
            todo.id = r.id;
            return todo;
          })),
        catchError(this.handleError)
      );
  }

  saveTodo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  updateTodo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  deleteTodo(todo: ToDo) {
    // TODO: Part of the exercise
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }

}

