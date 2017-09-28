// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-five',
    template: `
        <a (click)="1">Cmp5</a>

        <ul>
            <li>
                <cmp-ten></cmp-ten>
            </li>
            <li>
                <cmp-eleven></cmp-eleven>
            </li>
        </ul>
    `
})
export class ComponentFive implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
