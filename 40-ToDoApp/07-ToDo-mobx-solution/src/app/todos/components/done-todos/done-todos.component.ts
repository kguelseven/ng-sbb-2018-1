import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoStore} from '../../model/todo.store';

@Component({
  selector: 'td-done-todos',
  templateUrl: './done-todos.component.html',
})
export class DoneTodosComponent implements OnInit {

  constructor(private todoStore: ToDoStore) {
  }

  ngOnInit() {
    this.todoStore.getTodos();
  }

  removeToDo(todo: ToDo) {
    this.todoStore.deleteTodo(todo);
  }

}
