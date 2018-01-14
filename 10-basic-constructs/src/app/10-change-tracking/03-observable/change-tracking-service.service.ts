import { Injectable } from '@angular/core';
import {AppState} from './AppState';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ChangeTrackingServiceService {

  serviceState = new AppState();
  state$ = new BehaviorSubject(new AppState());

  constructor() {
    setInterval(() => this.incrementCounterProgrammatic(), 5000);
  }

  incrementCounter() {
    this.serviceState.counterManual++;
    this.state$.next({...this.serviceState});
  }

  private incrementCounterProgrammatic() {
    this.serviceState.counterProgrammatic++;
    this.state$.next({...this.serviceState});
  }
}
