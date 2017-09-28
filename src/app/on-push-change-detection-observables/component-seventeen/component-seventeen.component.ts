// tslint:disable:component-selector
// tslint:disable:component-class-suffix

import {
    DoCheck,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnInit
} from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { toggleClass } from '../../toggle-class.service';
import { MessageService } from '../../toggle-state.service';

@Component({
    selector: 'cmp-seventeen',
    template: `
        <a class="on-push subscriber">Cmp17</a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeventeen implements OnInit, DoCheck {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef, private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        // this.model.subscribe(() => {
        //     this.cd.markForCheck();
        //     toggleClass(this.el, this.zone, 'checked-observable');
        // });

        MessageService.messages.subscribe(() => {
            this.cd.markForCheck();
            // toggleClass(this.el, this.zone, 'checked-observable');
        });
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone, 'checked-observable');
    }

}
