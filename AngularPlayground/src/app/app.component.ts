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
        setTimeout(() => { observer.next("4") }, 4000); //emit this chunk of data later
        setTimeout(() => { observer.next("5") }, 5000); //emit this chunk of data later
    });

    ngOnInit(): void {
        //subscribe to the observable, log each chunk of data once it is received.
        this.myObservable.subscribe((val) => {
            console.log(val);
        })
    }
}
