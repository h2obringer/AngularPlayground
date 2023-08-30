import { Injectable, EventEmitter } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable() //this allows us to inject the logger service dependency
export class UserService {

    constructor(private logger: LoggerService) { }

    users = [
        { name: 'John', isActive: true, job: 'Teacher', gender: 'Male', age: 35 },
        { name: 'Merry', isActive: false, job: 'Doctor', gender: 'Female', age: 40 },
        { name: 'Steve', isActive: true, job: 'Lawyer', gender: 'Male', age: 32 }
    ];

    AddNewUser(name: string, isActive: boolean) {
        this.users.push({ name: name, isActive: isActive, job: 'unknown', gender: 'unknown', age: 0 });
        this.logger.LogMessage(name, isActive);
    }

    OnShowDetailsClicked = new EventEmitter<{ name: string, isActive: boolean, job: string, gender: string, age: number }>();

    ShowUserDetails(user: { name: string, isActive: boolean, job: string, gender: string, age: number }) {
        this.OnShowDetailsClicked.emit(user);
    }
}