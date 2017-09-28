// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import { DoCheck, Component, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { toggleClass } from '../../toggle-class.service';
import { MessageService } from '../../toggle-state.service';

@Component({
    selector: 'cmp-twelve',
    template: `
        <a (click)="1">Cmp12</a>
    `
})
export class ComponentTwelve implements DoCheck {

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
        MessageService.messages.subscribe(a => {
            this.cd.detectChanges();
        });
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
