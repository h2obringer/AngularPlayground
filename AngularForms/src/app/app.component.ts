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

    setDefaultValues() {
        //NOTE: the structure of the object here must match the structure of the form.value section inside the ngForm object.
        //this means all values must be set for the entire form here...
        // this.form.setValue({
        //     country: this.defaultCountry,
        //     gender: this.defaultGender,
        //     isSportsHobby: false,
        //     isMoviesHobby: false,
        //     isMusicHobby: false,
        //     personalDetails: {
        //         fname: 'John',
        //         lname: 'Doe',
        //         email: 'John.Doe@test.com'
        //     }
        // });

        //patchValue allows us to update a specific value (or form group)
        this.form.form.patchValue({
            personDetails: {
                fname: 'John',
                lname: 'Doe',
                email: 'John.Doe@test.com'
            }
        })
    }

    onSubmit() {
        console.log(this.form);
    }
}
