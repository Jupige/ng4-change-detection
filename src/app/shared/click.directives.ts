// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import { Component, NgZone, OnInit, ElementRef, ChangeDetectorRef, DoCheck, AfterContentChecked, Input } from '@angular/core';
import { toggleClass } from '../toggle-class.service';
import { Subject } from 'rxjs/Rx';
import { MessageService } from '../toggle-state.service';

@Component({
    selector: 'cmp-base',
    template: ''
})
export class CompnentBase implements DoCheck, AfterContentChecked, DoCheck {

    constructor(protected zone: NgZone, protected el: ElementRef, protected cd: ChangeDetectorRef) {
    }

    ngAfterContentChecked(): void {

    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }
}


@Component({
    selector: 'cmp-base',
    template: ''
})
export class AttachableCompnentBase extends CompnentBase implements OnInit {

    @Input() notifier: Subject<any>;
    attached = false;

    ngOnInit() {
        this.cd.detach();

        MessageService.messages.subscribe((attach) => {
            if (attach) {
                this.el.nativeElement.querySelector('a').classList.remove('detached');
                this.cd.reattach();
            } else {
                this.el.nativeElement.querySelector('a').classList.add('detached');
                this.cd.detach();
            }
        });
    }
}
