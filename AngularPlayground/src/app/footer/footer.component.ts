import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [EnrollService]
})
export class FooterComponent {
    constructor(private enrollService: EnrollService) { }
    ngOnInit(): void { }

    display: boolean = false;
    occupation: string = 'teacher';

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

    displayNotice() {
        this.display = true;
    }

    OnEnroll() {
        this.enrollService.OnEnrollClicked('Using a simple service here.');
    }
}
