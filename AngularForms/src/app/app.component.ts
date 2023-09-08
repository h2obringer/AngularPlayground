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
    @ViewChild('myForm') form: NgForm;

    onSubmit() {
        console.log(this.form);
    }
}
