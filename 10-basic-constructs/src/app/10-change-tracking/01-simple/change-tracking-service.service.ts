import { Injectable } from '@angular/core';
import {AppState} from './AppState';

@Injectable()
export class ChangeTrackingServiceService {

  private serviceState = new AppState();

  constructor() {
    setInterval(() => this.increment(), 1000);
  }

  get state(): AppState {
    return this.serviceState;
  }

  private increment() {
    this.serviceState.counterProgrammatic++;
  }

}
