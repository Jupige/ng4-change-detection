// tslint:disable:component-selector
// tslint:disable:component-class-suffix
// tslint:disable:use-host-property-decorator

import { DoCheck, ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { toggleClass } from '../../toggle-class.service';
import { MessageService } from '../../toggle-state.service';

@Component({
    selector: 'cmp-seven',
    host: {
        '(click)': 'emitAndTriggerChangeDetection()'
    },
    template: `
        <a class="on-push click-me">Cmp7</a>

        <ul>
            <li>
                <cmp-fourteen></cmp-fourteen>
            </li>
            <li>
                <cmp-fiveteen></cmp-fiveteen>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSeven implements DoCheck {

    @Input() model: Subject<any>;

    constructor(private zone: NgZone, private el: ElementRef) {
    }

    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

    emitAndTriggerChangeDetection() {
        // this.model.next(null);
        MessageService.messages.next(null);
    }

}
