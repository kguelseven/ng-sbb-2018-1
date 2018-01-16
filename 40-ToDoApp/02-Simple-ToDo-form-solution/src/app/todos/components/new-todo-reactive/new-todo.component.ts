import {Component, EventEmitter, Output} from '@angular/core';
import {ToDo} from '../../model/todo.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'td-new-todo',
  templateUrl: './new-todo.component.html',
})
export class NewTodoComponent {

  theForm: FormGroup;
  @Output() onAddToDo = new EventEmitter<ToDo>();

  constructor(formBuilder: FormBuilder) {
    this.theForm = formBuilder.group({
      'newToDoTitle': ['', [
        Validators.required,
        Validators.minLength(3),
        validateTodo
      ]]
    });

    // programmatic chages of validation
    setTimeout(this.enableValidation.bind(this), 5000);
  }

  onSubmit() {
    console.log(this.theForm);
    this.onAddToDo.emit(new ToDo(this.theForm.value.newToDoTitle));
  }

  enableValidation() {
    console.log('changing validators...');
    const titleControl = this.theForm.get('newToDoTitle');
    titleControl.setValidators([
      Validators.required,
      Validators.minLength(3),
      validateTodo
    ]);
    titleControl.updateValueAndValidity();
  }
}

function validateTodo(c: FormControl) {

  const firstChar = c.value.charAt(0);

  if (!firstChar || firstChar === firstChar.toUpperCase()) {
    return null;
  } else {
    return {
      validateTodo: {
        valid: false
      }
    };
  }
}
