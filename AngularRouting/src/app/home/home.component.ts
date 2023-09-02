import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

    fragmentSub: Subscription;

    ngOnInit(): void {
        this.fragmentSub = this.activatedRoute.fragment.subscribe((value) => {
            document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
        });
    }

    ngOnDestroy(): void {
        this.fragmentSub.unsubscribe();
    }

    navigateToAbout() {
        // option 1 for navigating programmatically
        // this.route.navigate(['About']); //USES ABSOLUTE PATHS

        // option 2 for navigating programmatically - navigate by URL
        //this.route.navigateByUrl('About'); //USES ABSOLUTE PATHS

        // option 3 for navigating programmatically - Relative Paths, navigate by URL
        this.route.navigate(['About'], { relativeTo: this.activatedRoute });
    }

    navigateToCourse() {
        this.route.navigate(['/Courses/Course', 10], { queryParams: { editMode: true } })
    }
}
