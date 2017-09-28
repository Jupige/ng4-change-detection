// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import { CompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-two',
    template: `
        <a  (click)="ngDoCheck($event)">Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `
})
export class ComponentTwo extends CompnentBase {

}
