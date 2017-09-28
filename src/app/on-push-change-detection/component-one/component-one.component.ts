// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-one',
    template: `
        <a (click)="1">Cmp1</a>

        <ul>
            <li>
                <cmp-two></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
