// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-nine',
    template: `
        <a (click)="1">Cmp9</a>

        <ul>
            <li>
                <cmp-seventeen></cmp-seventeen>
            </li>
        </ul>
    `
})
export class ComponentNine implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
