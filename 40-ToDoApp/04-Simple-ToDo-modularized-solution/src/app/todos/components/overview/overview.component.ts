import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './overview.component.html',
  providers: [ToDoService]
})
export class OverviewComponent implements OnInit {

  todos: Array<ToDo> = [];
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  addToDo(todo: ToDo) {
    this.todos.push(todo); // optimistic ui
    this.todoService.saveTodo(todo)
      .subscribe(
        persistedTodo => todo.id = persistedTodo.id,
        this.handleError
      );
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoService.updateTodo(todo)
      .subscribe(
        () => this.loadTodos(), // pessimistic ui
        this.handleError
      );
  }

  private loadTodos() {
    return this.todoService.getTodos()
      .subscribe(
        todos => {
          this.todos = todos.filter(t => !t.completed);
          this.doneToDos = todos.filter(t => t.completed);
        }
      );
  }


  private handleError(error) {
    const errMsg = error.message || 'Error calling server';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
