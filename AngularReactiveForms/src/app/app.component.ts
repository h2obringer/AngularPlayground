import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileService } from './profile.service';

//Best Practice: Page Components should only contain code related to the user interface, therefore moving http requests to a service class is ideal to keep the code in this file small
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Profile, PersonalDetails } from './profile';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(private http: HttpClient, private profileService: ProfileService) { }

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

    allProfiles: Profile[];
    errorMsg: string = '';
    errorSubscription: Subscription;

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

        //use of setTimeout here to show that default values can be set in a delayed manner as well...
        // setTimeout(() => {
        //     //the structure of the object sent to setValue must match the object of the form
        //     this.reactiveForm.setValue({
        //         personalDetails: {
        //             firstName: '',
        //             lastName: '',
        //             email: 'abc@example.com'
        //         },
        //         gender: this.defaultGender,
        //         country: this.defaultCountry,
        //         isSportsHobby: true,
        //         isMusicHobby: false,
        //         isMoviesHobby: true,
        //         skills: []
        //     });
        // }, 4000);

        setTimeout(() => {
            //the structure of the object sent to setValue must match the object of the form
            this.reactiveForm.patchValue({
                personalDetails: {
                    email: 'abc@example.com'
                },
                gender: this.defaultGender,
                country: this.defaultCountry,
            });
        }, 4000);

        //Best practice would be to put this in a service class
        this.profileService.getProfiles()
            .subscribe({
                next: (response) => {
                    this.allProfiles = response;
                    console.log(response);
                },
                error: (e) => {
                    this.profileService.error.next(e);
                },
                complete: () => {
                    console.log("Request completed.");
                }
            });

        this.errorSubscription = this.profileService.error.subscribe((message) => {
            this.errorMsg = message;
        })
    }

    ngOnDestroy(): void {
        this.errorSubscription.unsubscribe();
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

    //Best practice would be to put this in a service class
    onDelete(id: number) {
        this.profileService.deleteProfile(id);
    }

    onUpdate(id: number, value: Profile) {
        this.profileService.updateProfile(id, value);
    }

    onSubmit() {
        this.profileService.createProfile(this.reactiveForm.value);

        //reset accepts the same arguments as setValue() in order to reset to some default value set.
        this.reactiveForm.reset({
            personalDetails: {
                firstName: '',
                lastName: '',
                email: 'abc@example.com'
            },
            gender: this.defaultGender,
            country: this.defaultCountry,
            isSportsHobby: true,
            isMusicHobby: false,
            isMoviesHobby: true,
            skills: []
        });
    }
}
