// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-one',
    template: `
        <a (click)="1">Cmp1</a>

        <ul>
            <li>
                <cmp-two [notifier]="notifier"></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne implements DoCheck {

    @Input() notifier: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
