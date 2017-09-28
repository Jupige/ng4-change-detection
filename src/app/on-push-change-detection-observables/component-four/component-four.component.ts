// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-four',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp4</a>

        <ul>
            <li>
                <cmp-eight></cmp-eight>
            </li>
            <li>
                <cmp-nine [model]="model"></cmp-nine>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFour implements DoCheck {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

    triggerChangeDetection() {
    }

}
