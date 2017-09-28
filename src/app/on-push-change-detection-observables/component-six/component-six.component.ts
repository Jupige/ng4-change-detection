// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-six',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp6</a>

        <ul>
            <li>
                <cmp-twelve></cmp-twelve>
            </li>
            <li>
                <cmp-thirteen></cmp-thirteen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSix implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
