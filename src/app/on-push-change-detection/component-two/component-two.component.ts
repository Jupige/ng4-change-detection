// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {
    DoCheck,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    NgZone
} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-two',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
