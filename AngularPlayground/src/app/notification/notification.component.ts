import { Component, ContentChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-notification',
    //it is best practice to only use template if the html is 3 lines of code or less...
    //CON: if the template contains any errors, we will not get any compile-time errors.
    //CON: this mixes Typescript code with HTML code (NOT BEST PRACTICES)
    template: `
        <div class="alert alert-success" [ngClass]="{fadeOut: isHidden}">
            This website uses cookies to provide better user experience.
            <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
        </div>
        <ng-content></ng-content>
    `,
    styles: [
        `
            .notification-div{
                margin: 10px 0px;
                padding: 10px 20px; 
                background-color: #FAD7A0;
                text-align: center;
            }
        `,
        `
            p{
                font-size: 14px;
            }
        `,
        `
            .close{
                float: right;
                margin-top: -15px;
            }
        `,
        `
            .fadeOut{
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s 2s, opacity 2s linear;
            }
        `
    ]
})
export class NotificationComponent implements OnInit, AfterContentInit {
    constructor() { }

    @ContentChild('ngcontent1') content1: ElementRef;

    ngOnInit(): void {
        //content1 is not initialized here...
    }

    ngAfterContentInit(): void {
        console.log(this.content1.nativeElement.textContent);
    }

    isHidden: boolean = false;

    closeNotification() {
        this.isHidden = true;
    }
}
