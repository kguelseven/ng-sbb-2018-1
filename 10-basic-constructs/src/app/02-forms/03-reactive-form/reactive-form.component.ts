import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'aw-form',
    templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
    theForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this.theForm = formBuilder.group({
            'name': ['Tyler', Validators.required],
            'password': ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    onSubmit(value: string): void {
        console.log('submitted: ', value, this.theForm.value);
    }

}
