import {
  ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {AppState} from '../AppState';

@Component({
  selector: 'aw-observince-child',
  templateUrl: './change-tracking-child.component.html',
  styles: ['.child {border: solid 1px; margin: 5px; padding: 5px}'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ObservingChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() serviceState: AppState;
  @Output() increment = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    // We can still modify the local state directly, which leads to strange effects
    // setInterval(() => this.serviceState.counterProgrammatic++, 1500);
  }

  incrementServiceCounter() {
    this.increment.emit();

    // We can still modify the local state directly, which leads to strange effects
    // this.serviceState.counterManual++;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Child: OnChanges');
  }

  ngDoCheck(): void {
    // console.log('Child: DoCheck');
  }

}
