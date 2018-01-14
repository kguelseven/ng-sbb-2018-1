import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {ClockComponent} from './clock.component';

@Component({
    selector: 'aw-content-container',
    templateUrl: 'black-box.component.html',
    styleUrls: ['black-box.component.css']
})
export class BlackBoxComponent implements AfterContentInit {

    private _format = 'HH:mm:ss';
    @ContentChildren(ClockComponent) children: QueryList<ClockComponent>;

    ngAfterContentInit() {
        this.setFormatOnClocks();
    }

    set format(value: string) {
        this._format = value;
        this.setFormatOnClocks();
    }

    get format() {
        return this._format;
    }

    private setFormatOnClocks() {
        this.children.forEach(c => c.format = this._format);
    }

}

