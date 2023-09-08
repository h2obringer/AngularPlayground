import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularForms';
    country: string = '';
    defaultCountry = 'usa';
    firstName: string;
    lastName: string;
    email: string = '';
    gender: string = '';
    defaultGender: string = 'Male';
    @ViewChild('myForm') form: NgForm;

    genderList = [
        { id: 1, value: 'Male' },
        { id: 2, value: 'Female' },
        { id: 3, value: 'Other' }
    ];

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
        // console.log(this.form);
        this.firstName = this.form.value.personalDetails.fname;
        this.lastName = this.form.value.personalDetails.lname;
        this.email = this.form.value.personalDetails.email;
        this.country = this.form.value.country;
        this.gender = this.form.value.gender;

        //reset the form here...
        this.form.reset();
    }
}
