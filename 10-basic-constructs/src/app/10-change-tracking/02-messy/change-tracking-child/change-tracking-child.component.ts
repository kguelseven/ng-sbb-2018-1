import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppState} from '../AppState';

@Component({
  selector: 'aw-change-tracking-child',
  templateUrl: './change-tracking-child.component.html',
  styles: ['.child {border: solid 1px; margin: 5px; padding: 5px}'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeTrackingChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() parentState: AppState;
  @Input() serviceState: AppState;

  constructor() { }

  ngOnInit() {
    setInterval(() => this.updateTime(), 1000);
  }


  incrementParentCounter() {
    this.parentState.counterManual++;
  }

  incrementServiceCounter() {
    this.serviceState.counterManual++;
  }

  private updateTime() {
    this.parentState.counterProgrammatic++;
    this.serviceState.counterProgrammatic++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child: OnChanges');
  }

  ngDoCheck(): void {
    // console.log('Child: DoCheck');
  }

}
