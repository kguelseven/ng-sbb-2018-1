import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ChangeTrackingServiceService} from './change-tracking-service.service';
import {AppState} from './AppState';

@Component({
  templateUrl: './change-tracking-app.component.html',
  providers: [ChangeTrackingServiceService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeTrackingAppComponent implements OnInit {

  componentState = new AppState();

  constructor(public service: ChangeTrackingServiceService) {}

  ngOnInit() {
    setInterval(() => this.increment(), 1000);
  }

  private increment() {
    this.componentState.counterProgrammatic++;
  }

  incrementComponentCounter() {
    this.componentState.counterManual++;
  }

  incrementServiceCounter() {
    this.service.state.counterManual++;
  }
}
