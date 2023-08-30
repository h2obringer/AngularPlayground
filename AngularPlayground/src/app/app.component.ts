import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'AngularPlayground';
    message = 'test a message on the AppComponent.'

    myObservable = new Observable((observer) => {
        console.log('Observable starts');
        observer.next("1"); //emit this chunk of data
        setTimeout(() => { observer.next("2") }, 2000); //emit this chunk of data later
        setTimeout(() => { observer.next("3") }, 3000); //emit this chunk of data later

        //setTimeout(() => { observer.error(new Error('Something went wrong please try again later.')) }, 3000); //emit this chunk of data later
        //4 and 5 will no longer get emitted because the error was thrown above. (if calling .error()...), the complete signal won't be emitted either.

        //setTimeout(() => { observer.complete() }, 3000); //send the completion status
        //4 and 5 will no longer get emitted because the completion signal was transmitted (if calling .complete()...).

        setTimeout(() => { observer.next("4") }, 4000); //emit this chunk of data later
        setTimeout(() => { observer.next("5") }, 5000); //emit this chunk of data later
        setTimeout(() => { observer.complete() }, 6000); //send the completion status
    });

    ngOnInit(): void {
        //subscribe to the observable, log each chunk of data once it is
        this.myObservable.subscribe((val) => {
            console.log(val);
        }, (error) => {
            alert(error.message);
        }, () => {
            alert("Observable has completed emitting all values.");
        })
    }
}
