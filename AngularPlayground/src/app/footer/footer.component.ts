import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
    constructor() { }
    ngOnInit(): void { }

    @ViewChild('dobInput') dateOfBirth: ElementRef;
    @ViewChild('ageInput') age: ElementRef;

    sayHello(inputEl: HTMLInputElement) {
        alert("Hello " + inputEl.value);
    }

    viewChildComponentExample() {
        console.log("This is an example of using a Component as a ViewChild.");
    }

    calculateAge() {
        let birthYear: number = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
        let currentYear: number = new Date().getFullYear();
        let age = currentYear - birthYear;
        this.age.nativeElement.value = age;
    }
}
