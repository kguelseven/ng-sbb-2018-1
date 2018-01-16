import {Component, EventEmitter, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {observable} from 'mobx';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {

  @observable private newToDoTitle = '';
  @Output() onAddToDo = new EventEmitter<ToDo>();

  addToDo(): void {
    this.onAddToDo.emit(new ToDo(this.newToDoTitle));
    this.newToDoTitle = '';
  }

}
