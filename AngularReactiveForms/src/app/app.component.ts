import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'AngularReactiveForms';

    reactiveForm: FormGroup;

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

    ngOnInit(): void {
        this.reactiveForm = new FormGroup({
            personalDetails: new FormGroup({
                firstName: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
                lastName: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
                email: new FormControl(null, [Validators.required, Validators.email]),
            }),
            gender: new FormControl(this.defaultGender),
            country: new FormControl(this.defaultCountry),
            isSportsHobby: new FormControl(null),
            isMoviesHobby: new FormControl(null),
            isMusicHobby: new FormControl(null),
            skills: new FormArray([
                new FormControl(null, Validators.required),
            ]),
        });
    }

    addSkill() {
        //<FormArray> = typecasting
        (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
    }

    //custom validator
    noSpaceAllowed(control: FormControl) {
        if (control.value != null && control.value.indexOf(' ') !== -1) {
            return { noSpaceAllowed: true }; //noSpaceAllowed is the name of our unique error code
        }
        return null;
    }

    onSubmit() {
        console.log(this.reactiveForm);
    }
}
