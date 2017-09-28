// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import { CompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-seven',
    template: `
        <a  (click)="ngDoCheck($event)">Cmp7</a>
    `
})
export class ComponentSeven extends CompnentBase {

}
