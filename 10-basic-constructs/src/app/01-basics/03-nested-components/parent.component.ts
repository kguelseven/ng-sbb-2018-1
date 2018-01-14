import {Component, OnInit, ViewChild, ContentChild, ViewChildren, QueryList, AfterViewInit} from '@angular/core';

export interface IPerson {
    firstName: string;
    lastName: string;
    age: number;
}

@Component({
    selector: 'aw-parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

    persons: Array<IPerson>;

    ngOnInit() {
        this.persons = [{firstName: 'John', lastName: 'Doe', age: 42}];
    }

    onAddPerson(person: IPerson) {
        this.persons.push(person);
    }
}







// DEMO:
// Introduce @ViewChild(ChildFormComponent) childForm -> call reset() from template
// Add reset method that calls childForm.reset()

// ViewChild is available in ngAfterContentInit() lifecycle-hook.

// Add second child-form -> change to @ViewChildren + QueryList<ChildFormComponent> -> reset each
