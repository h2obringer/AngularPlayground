import { Component } from '@angular/core';

@Component({
    selector: '.app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor() { }

    ngOnInit(): void {

    }

    slogan: string = "Your one stop shop for everything.";

    getSlogan() {
        return this.slogan;
    }
}
