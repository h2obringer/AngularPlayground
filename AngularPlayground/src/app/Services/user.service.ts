import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable() //this allows us to inject the logger service dependency
export class UserService {

    constructor(private logger: LoggerService) { }

    users = [
        { name: 'John', isActive: true },
        { name: 'Mark', isActive: false },
        { name: 'Steve', isActive: true }
    ];

    AddNewUser(name: string, isActive: boolean) {
        this.users.push({ name: name, isActive: isActive });
        this.logger.LogMessage(name, isActive);
    }
}