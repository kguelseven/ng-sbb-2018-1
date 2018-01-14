import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChangeTrackingServiceService} from '../change-tracking-service.service';
import {AppState} from '../AppState';

@Component({
  templateUrl: './change-tracking-app.component.html',
  providers: [ChangeTrackingServiceService],
  changeDetection: ChangeDetectionStrategy.Default,
  styles: ['.container {display: flex}']
})
export class ObservableChangeTrackingAppComponent {

  componentState = new AppState();

  constructor(public service: ChangeTrackingServiceService) {}

  incrementServiceCounter() {
    this.service.incrementCounter();
  }
}
