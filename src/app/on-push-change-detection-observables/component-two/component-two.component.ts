// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {toggleClass} from '../../toggle-class.service';

@Component({
    selector: 'cmp-two',
    template: `
        <a class="on-push"  (click)="ngDoCheck($event)">Cmp2</a>

        <ul>
            <li>
                <cmp-four [model]="model"></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo implements DoCheck {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
