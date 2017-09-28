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
import { AttachableCompnentBase } from '../../shared/click.directives';

@Component({
    selector: 'cmp-two',
    template: `
        <a  (click)="1" class="detached">Cmp2</a>

        <ul>
            <li>
                <cmp-four></cmp-four>
            </li>
            <li>
                <cmp-five></cmp-five>
            </li>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTwo extends AttachableCompnentBase implements OnInit, DoCheck {

    @Input() notifier: Subject<any>;
    attached = false;


    ngDoCheck() {
        toggleClass(this.el, this.zone);
    }

}
