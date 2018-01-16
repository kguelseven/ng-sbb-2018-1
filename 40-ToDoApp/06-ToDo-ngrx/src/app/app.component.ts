import {Component, OnInit} from '@angular/core';
import {IAppState} from './store/todo.store';
import {Store} from '@ngrx/store';
import {LoadToDos} from './store/todo.actions';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{ todos: IAppState }>) { }

  ngOnInit(): void {
    // this.store.dispatch(new LoadToDos());
  }
}
