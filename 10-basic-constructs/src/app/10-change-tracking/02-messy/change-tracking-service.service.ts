import { Injectable } from '@angular/core';
import {AppState} from './AppState';

@Injectable()
export class ChangeTrackingServiceService {

  private serviceState = new AppState();

  get state(): AppState {
    return this.serviceState;
  }

}
