import { Component } from '@angular/core';

@Component({
    selector: 'aw-pipes',
    templateUrl: 'pipes.component.html',
})
export class PipesComponent {
    message = 'Hello from Angular!!!!';
    time: Date = new Date();
    count = 0.45699;
}
