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

  getTodo(id: number) {
    return this.http.get(`${backendUrl}/${id}`)
      .pipe(
        map((res: any) => res.data),
        map((data: any) => {
          const todo = new ToDo(data.title);
          todo.completed = data.completed;
          todo.id = data.id;
          return todo;
        }),
        catchError(this.handleError)
      );
  }

  saveTodo(todo: ToDo): Observable<ToDo> {

    return this.http.post(backendUrl, todo)
      .pipe(
        map((response: any) => {
          const data = response.data;
          const persistedToDo = new ToDo(data.title);
          persistedToDo.completed = data.completed;
          persistedToDo.id = data.id;
          return persistedToDo;
        }),
        catchError(this.handleError)
      );
  }

  updateTodo(todo: ToDo): Observable<ToDo> {
    return this.http.put(`${backendUrl}/${todo.id}`, todo)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTodo(todo: ToDo): Observable<any> {
    return this.http.delete(`${backendUrl}/${todo.id}`);
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }

}

