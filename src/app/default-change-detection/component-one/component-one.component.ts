// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import { DoCheck, Component, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from '../../toggle-class.service';
import { CompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-one',
    template: `
        <a (click)="ngDoCheck($event)">Cmp1</a>

        <ul>
            <li>
                <cmp-two></cmp-two>
            </li>
            <li>
                <cmp-three></cmp-three>
            </li>
        </ul>
    `
})
export class ComponentOne extends CompnentBase {
}
