import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/AppState';
import {Observable} from 'rxjs/Observable';
import {IncrementService} from '../increment.service';
import {INCREASE_MANUAL} from '../model/AppReducer';

@Component({
  templateUrl: './change-tracking-app.component.html',
  styles: ['.container {display: flex}'],
  providers: [IncrementService]
})
export class NgrxChangeTrackingAppComponent {
  state$: Observable<AppState>;

  constructor(private store: Store<{ app: AppState }>, private incrementService: IncrementService) {
    this.state$ = store.select('app');
  }

  increaseManualCounter() {
    this.store.dispatch({type: INCREASE_MANUAL});
  }
}
