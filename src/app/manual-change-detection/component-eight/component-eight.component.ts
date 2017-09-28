// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-eight',
    template: `
        <a (click)="1">Cmp8</a>

        <ul>
            <li>
                <cmp-sixteen></cmp-sixteen>
            </li>
        </ul>
    `
})
export class ComponentEight implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
