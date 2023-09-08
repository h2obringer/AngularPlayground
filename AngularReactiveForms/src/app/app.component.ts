import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularReactiveForms';
    country: string = '';
    defaultCountry = 'usa';
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    gender: string = '';
    defaultGender: string = 'Male';

    genderList = [
        { id: 1, value: 'Male' },
        { id: 2, value: 'Female' },
        { id: 3, value: 'Other' }
    ];

    onSubmit() {
        // console.log(this.form);
    }
}
