import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ToggleStateService {
    runInterval = false;
}


export class MessageService {
    static messages: EventEmitter<any> = new EventEmitter<any>();
}
