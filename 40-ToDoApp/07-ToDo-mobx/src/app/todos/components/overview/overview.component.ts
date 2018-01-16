import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {ToDoStore} from '../../model/todo.store';

@Component({
  selector: 'td-overview',
  templateUrl: './overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent implements OnInit {

  constructor(private todoStore: ToDoStore) {
  }

  ngOnInit() {
    this.todoStore.getTodos();
  }

  addToDo(todo: ToDo) {
    this.todoStore.saveTodo(todo);
  }

  completeToDo(todo: ToDo) {
    todo.completed = true;
    this.todoStore.updateTodo(todo);
  }

}
