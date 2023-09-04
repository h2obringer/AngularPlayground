import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../services/deactivate-route-guard.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactivateComponent {
    firstName: string;
    lastName: string;

    constructor() { }

    ngOnInit(): void {

    }

    canExit(): boolean {
        if (this.firstName || this.lastName == '') {
            //confirm will return the selection of the user.
            return confirm('You have unsaved changes. Do you really want to discard these changes?');
        } else {
            return true;
        }
    }
}
