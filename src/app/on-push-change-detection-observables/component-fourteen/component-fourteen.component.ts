// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../..//toggle-class.service';

@Component({
    selector: 'cmp-fourteen',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp14</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFourteen implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
