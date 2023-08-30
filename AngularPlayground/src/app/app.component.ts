import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'AngularPlayground';
    message = 'test a message on the AppComponent.'

    //method 1 - user Observable constructor
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

    //method 2 of creating an observable - similar to using the constructor...
    //deprecated, will be removed soon...
    myObservable2 = Observable.create((observer) => {
        console.log('Observable starts');
        observer.next("A"); //emit this chunk of data
        setTimeout(() => { observer.next("B") }, 2000); //emit this chunk of data later
        setTimeout(() => { observer.next("C") }, 3000); //emit this chunk of data later
        setTimeout(() => { observer.next("D") }, 4000); //emit this chunk of data later
        setTimeout(() => { observer.next("E") }, 5000); //emit this chunk of data later
        setTimeout(() => { observer.complete() }, 6000); //send the completion status
    });

    array1 = [6, 7, 8, 9, 10];
    array2 = ['F', 'G', 'H', 'I', 'J'];

    //method 3
    //will emit the arrays as is in each packet/chunk sent.
    myObservable3 = of(this.array1, this.array2); //will emit the passed in data and automatically send the complete signal once complete...

    //method 4
    myObservable4 = from(this.array1); //will emit the passed in data and automatically send the complete signal once complete... arrays will be iterated and the values emitted seperately.

    ngOnInit(): void {
        //subscribe to the observable, log each chunk of data once it is
        this.myObservable.subscribe((val) => {
            console.log(val);
        }, (error) => {
            alert(error.message);
        }, () => {
            alert("Observable1 has completed emitting all values.");
        });

        this.myObservable2.subscribe((val) => {
            console.log(val);
        }, (error) => {
            alert(error.message);
        }, () => {
            alert("Observable2 has completed emitting all values.");
        });

        this.myObservable3.subscribe((val) => {
            console.log(val);
        }, (error) => {
            alert(error.message);
        }, () => {
            alert("Observable3 has completed emitting all values.");
        });

        this.myObservable4.subscribe((val) => {
            console.log(val);
        }, (error) => {
            alert(error.message);
        }, () => {
            alert("Observable4 has completed emitting all values.");
        });
    }
}
