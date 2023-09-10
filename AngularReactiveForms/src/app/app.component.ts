import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
    formStatus: string = '';

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
                email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
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

        //valueChanges event returns an Observable that we can subscribe to...

        //subscribe to changes on a single form value
        // this.reactiveForm.get('personalDetails.firstName').valueChanges.subscribe((value) => {
        //     console.log(value);
        // });

        //subscribe to changes on an entire form group
        this.reactiveForm.get('personalDetails').valueChanges.subscribe((value) => {
            console.log(value);
        });

        //statusChanges event returns an Observalbe that we can subscribe to...
        this.reactiveForm.statusChanges.subscribe((value) => {
            //possible values:
            // "INVALID"
            // "PENDING"
            // "VALID"
            this.formStatus = value;

            console.log(value);
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

    //class: ng-pending will be added to the control while the async validator waits to finish.
    emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {
        const response = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'procademy@gmail.com') {
                    resolve({ emailNotAllowed: true });
                } else {
                    resolve(null);
                }
            }, 5000);
        });

        return response;
    }

    onSubmit() {
        console.log(this.reactiveForm);
    }
}
