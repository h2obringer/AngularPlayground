import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    loggedIn: boolean = false;

    login() {
        this.loggedIn = true;
        alert('Logged in successfully');
    }

    logout() {
        this.loggedIn = false;
        alert('Logged out successfully');
    }

    IsAuthenticated() {
        return this.loggedIn;
    }

}