import { Component } from '@angular/core';

@Component({
    selector: 'app-notification',
    //it is best practice to only use template if the html is 3 lines of code or less...
    //CON: if the template contains any errors, we will not get any compile-time errors.
    //CON: this mixes Typescript code with HTML code (NOT BEST PRACTICES)
    template: `
        <div class="notification-div">
            <p>This website uses cookies to provide better user experience.
        </div>
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
        `
    ]
})
export class NotificationComponent {

}
