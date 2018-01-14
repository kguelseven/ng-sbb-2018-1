import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IPerson} from './parent.component';

@Component({
  selector: 'aw-child-list',
  templateUrl: './child-list.component.html',
})
export class ChildListComponent {

    @Input() children: Array<IPerson>;

}
