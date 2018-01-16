import {computed, observable, runInAction} from 'mobx';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToDo} from './todo.model';
import {catchError, map, tap} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

const API_URL = 'http://localhost:3456/todos';

@Injectable()
export class ToDoStore {

  @observable loadedToDos: any = [];
  @computed get pendingToDos() {
    return this.loadedToDos.filter(t => !t.completed);
  }
  @computed get doneToDos() {
    return this.loadedToDos.filter(t => t.completed);
  }

  constructor(private http: HttpClient) {}

  getTodos() {
     this.http.get(API_URL)
      .pipe(
        map(
          (res: any) => res.data.map((r) => {
            const todo = new ToDo(r.title);
            todo.completed = r.completed;
            todo.id = r.id;
            return todo;
          })),
        catchError(this.handleError)
      )
      .subscribe(
        v => {
          this.loadedToDos.replace(v);
        }
      );
  }

  saveTodo(todo: ToDo) {
    // const o = observable(todo);
    this.loadedToDos.push(todo);
    this.http.post(API_URL, todo)
      .pipe(
        tap((response: any) => {
          const data = response.data;
          todo.id = data.id;
        }),
        catchError(this.handleError)
      )
      .subscribe();
  }

  updateTodo(todo: ToDo) {
     this.http.put(`${API_URL}/${todo.id}`, todo)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe();
  }


  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }

}

