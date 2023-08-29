
import { Injectable } from '@angular/core';

@Injectable() //it is best practice to include this on all services whether it needs to be injected with another service or not
export class LoggerService {

    LogMessage(name: string, isActive: boolean) {
        console.log('A new ' + (isActive ? 'active' : 'inactive') + ' user with username "' + name + '" has been added.');
    }
}