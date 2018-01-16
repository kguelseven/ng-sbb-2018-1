import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoService} from '../../model/todo.service';

@Component({
  templateUrl: './overview.component.html',
  // providers: [ToDoService]
})
export class OverviewComponent implements OnInit {

  todos: Array<ToDo> = [];
  doneToDos: ToDo[];

  constructor(private todoService: ToDoService) {}

  ngOnInit() {
    this.loadToDos();
  }

  addToDo(todo: ToDo) {
    this.todos.push(todo);
    this.todoService.saveToDos(this.todos);
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoService.saveToDos(this.todos);
    this.loadToDos();
  }

  removeToDo(todo: ToDo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.todoService.saveToDos(this.todos);
  }

  private loadToDos() {
    const todoContainer = this.todoService.loadToDos();
    this.todos = todoContainer.todos;
    this.doneToDos = todoContainer.done;
  }

}
