// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-five',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp5</a>

        <ul>
            <li>
                <cmp-ten></cmp-ten>
            </li>
            <li>
                <cmp-eleven></cmp-eleven>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFive implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
