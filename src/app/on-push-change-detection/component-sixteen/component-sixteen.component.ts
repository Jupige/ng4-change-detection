// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-sixteen',
    host: {
        '(click)': 'triggerChangeDetection()'
    },
    template: `
        <a class="click-me">Cmp16</a>
    `
})
export class ComponentSixteen implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }

}
