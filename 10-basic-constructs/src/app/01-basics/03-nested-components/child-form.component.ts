import {Component, Output, EventEmitter} from '@angular/core';
import {IPerson} from './parent.component';

@Component({
  selector: 'aw-child-form',
  templateUrl: './child-form.component.html',
})
export class ChildFormComponent {
  firstName: string;
  lastName: string;
  age: number;

  addCount = 0;

  @Output() onAddPerson = new EventEmitter<IPerson>();

  addPerson() {
    const newPerson = {firstName: this.firstName, lastName: this.lastName, age: this.age};
    this.onAddPerson.emit(newPerson);
    this.addCount++;
  }

  reset() {
    this.addCount = 0;
  }
}
