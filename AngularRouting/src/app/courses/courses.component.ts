import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    constructor(private route: ActivatedRoute) { }

    courses = [];

    ngOnInit(): void {
        this.courses = this.route.snapshot.data['courses']; //see app-routing.module.ts -> resolve
        console.log(this.courses);
    }
}
