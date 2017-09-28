import { Component, ViewChild, ChangeDetectorRef, NgZone, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ToggleStateService } from '../toggle-state.service';
import { CompnentBase } from '../shared/click.directives';

@Component({
    selector: 'app-default-change-detection',
    templateUrl: 'default-change-detection.component.html',
    styleUrls: ['default-change-detection.component.css']
})
export class DefaultChangeDetectionComponent extends CompnentBase {
    @Input() name: string;
    @ViewChild('checkbox') checkbox;
    notifier: Subject<any>;
    runInterval: boolean;

    constructor(private toggleStateService: ToggleStateService, zone: NgZone, el: ElementRef, cd: ChangeDetectorRef) {
        super(zone, el, cd);
    }

    notifyInterval(runInterval) {
        this.toggleStateService.runInterval = runInterval;
        this.notifier.next(runInterval);
    }

}
