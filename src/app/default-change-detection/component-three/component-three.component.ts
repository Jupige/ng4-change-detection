// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import { CompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-three',
    template: `
        <a (click)="ngDoCheck($event)">Cmp3</a>

        <ul>
            <li>
                <cmp-six></cmp-six>
            </li>
            <li>
                <cmp-seven></cmp-seven>
            </li>
        </ul>
    `
})
export class ComponentThree extends CompnentBase {

}
