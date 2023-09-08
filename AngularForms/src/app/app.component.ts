import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularForms';
    defaultCountry = 'usa';
    firstName: string;
    lastName: string;
    email: string = '';
    gender = [
        { id: 1, value: 'Male' },
        { id: 2, value: 'Female' },
        { id: 3, value: 'Other' }
    ];
    defaultGender: string = 'Male';
    @ViewChild('myForm') form: NgForm;

    onSubmit() {
        console.log(this.form);
    }
}
