// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-four',
    template: `
        <a (click)="1">Cmp4</a>

        <ul>
            <li>
                <cmp-eight></cmp-eight>
            </li>
            <li>
                <cmp-nine></cmp-nine>
            </li>
        </ul>
    `
})
export class ComponentFour implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }

}
