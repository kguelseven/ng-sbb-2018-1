import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const BACKEND_URL = 'http://localhost:3456/todos';

interface ToDo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'aw-backend-crud',
  templateUrl: 'backend-crud.component.html'
})
export class BackendCrudComponent {

  ratings: Observable<any>;
  ratingId: number;
  todoText: string;
  completed = false;

  constructor(private http: HttpClient) {}

  getTodos() {
    this.ratings = this.http
      .get<ToDo>(BACKEND_URL);
  }

  postTodo() {

    const todo = {title: this.todoText, completed: this.completed};

    this.http
      .post(BACKEND_URL, todo)
      .subscribe(
        response => console.log(response)
      );
  }

  putTodo() {

    const rating = {title: this.todoText, completed: this.completed};

    this.http
      .put(`${BACKEND_URL}/${this.ratingId}`, rating)
      .subscribe(
        response => console.log(response)
      );
  }

  deleteTodo() {
    this.http
      .delete(`${BACKEND_URL}/${this.ratingId}`)
      .subscribe(
        response => console.log(response)
      );
  }

}
