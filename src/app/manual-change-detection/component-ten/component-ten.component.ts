// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import { DoCheck, Component, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from '../../toggle-class.service';
import { MessageService } from '../../toggle-state.service';

@Component({
    selector: 'cmp-ten',
    template: `
        <a (click)="next()">Cmp10</a>
    `
})
export class ComponentTen implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

    next() {
        MessageService.messages.next();
    }
}
