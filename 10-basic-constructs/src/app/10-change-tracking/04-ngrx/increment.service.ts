import {Injectable} from '@angular/core';
import {AppState} from './model/AppState';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Store} from '@ngrx/store';
import {INCREMENT_PROGRAMMATIC} from './model/AppReducer';

@Injectable()
export class IncrementService {

  constructor(private store: Store<{ app: AppState }>) {
    setInterval(() => this.increment(), 1000);
  }

  increment() {
    this.store.dispatch({type: INCREMENT_PROGRAMMATIC});
  }

}
