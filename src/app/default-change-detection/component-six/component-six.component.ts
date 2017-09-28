// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {DoCheck, Component, ElementRef, NgZone} from '@angular/core';
import {toggleClass} from '../../toggle-class.service';
import { CompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-six',
    template: `
        <a  (click)="ngDoCheck($event)">Cmp6</a>
    `
})
export class ComponentSix extends CompnentBase {

}
