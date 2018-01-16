import {Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  templateUrl: './overview.component.html',
  providers: [ToDoService]
})
export class OverviewComponent implements OnInit {

  todos: Array<ToDo> = [];
  doneToDos: ToDo[] = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.loadToDos();
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
        () => this.loadToDos(), // pessimistic ui
        this.handleError
      );
  }

  private loadToDos() {
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
    alert('Error: Calling the server failed!');
    window.location.reload();
  }
}
