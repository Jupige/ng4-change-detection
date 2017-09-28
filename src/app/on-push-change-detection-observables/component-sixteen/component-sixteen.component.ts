// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-sixteen',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp16</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
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
