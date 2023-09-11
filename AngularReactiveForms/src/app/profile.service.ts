import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Profile } from './profile';
import { throwError } from 'rxjs';

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) { }

    error: Subject<string> = new Subject<string>(); //error message will be of type string. //this should go in your HttpClient service class if implementing that way

    createProfile(profile: Profile) {
        console.log(profile);

        const headers = new HttpHeaders({ 'myHeader': 'procademy' }); //passing this data into this.http.post() is optional...
        // DEPRECATED VERSION
        // this.http.post('https://someserver.com/profile', this.reactiveForm.value, { headers: headers })
        //     .subscribe(
        //         (response) => {
        //             console.log(response);
        //         },
        //         (error) => {
        //             console.log(error);
        //         },
        //         () => {
        //             console.log('Request completed');
        //         }
        // );
        this.http.post('https://someserver.com/addprofile', profile, { headers: headers })
            .subscribe({
                next: (response) => {
                    console.log(response);
                },
                error: (e) => {
                    this.error.next(e.message); //returns an observable
                },
                complete: () => {
                    console.log("Request completed.");
                }
            });
    }

    getProfiles(): Observable<Profile[]> {
        return this.http.get<{ [key: string]: Profile }>('https://someserver.com/getProfiles')
            //transform the response if needed here with pipe and map...
            .pipe(map((response) => {
                const profiles = [];
                for (const key in response) {
                    if (response.hasOwnProperty(key)) {
                        profiles.push({ ...response[key], id: key }); //spread operator spreads 
                    }
                }
                return profiles;
            }), catchError((error) => {
                //Common error tasks here...
                //i.e. log to database or file here if desired...

                //pass the error back to the subscriber here...
                return throwError(() => new Error(error.message));
            }));
    }

    deleteProfile(id: number) {
        this.http.delete('https://someserver.com/deleteProfile/' + id).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (e) => {
                this.error.next(e.message); //returns an observable
            },
            complete: () => {
                console.log("Request completed.");
            }
        });
    }

    updateProfile(id: number, value: Profile) {
        this.http.put('https://someserver.com/updateProfile/' + id, value).subscribe({
            next: (response) => {
                console.log(response);
            },
            error: (e) => {
                this.error.next(e.message); //returns an observable
            },
            complete: () => {
                console.log("Request completed.");
            }
        });
    }
}