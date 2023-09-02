import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
    constructor(private activeRoute: ActivatedRoute) { }

    courseId: string | null = '0';
    routeParamSub: Subscription = new Subscription();
    queryParamSub: Subscription = new Subscription();
    editMode: boolean = false; //example value to be assigned via the query parameters.

    ngOnInit(): void {
        //NOTE: doing this only works once... If you happened to navigate to a different course straight from this page, the page wouldn't updated with the most recent id
        //only use option 1 and 2 when you know the parameter value won't change over time while on this page.

        //option 1 - paramMap (this is the new way)
        // this.courseId = this.activeRoute.snapshot.paramMap.get('id');
        // this.editMode = Boolean(this.activeRoute.snapshot.queryParamMap.get('editMode'));

        //option 2 - params array (this is the old way)
        // this.courseId = this.activeRoute.snapshot.params['id'];
        // this.editMode = Boolean(this.activeRoute.snapshot.queryParams['editMode']);

        //option 3 - observables (RECOMMENDED)
        this.routeParamSub = this.activeRoute.paramMap.subscribe((param: ParamMap) => {
            this.courseId = param.get('id');
        }); //unsubscribing from this will be taken care of by Angular but its always good practice to unsubscribe from this ourselves...

        this.queryParamSub = this.activeRoute.queryParamMap.subscribe((param: ParamMap) => {
            this.editMode = Boolean(param.get('editMode'));
        });

    }

    ngOnDestroy(): void {
        this.routeParamSub.unsubscribe();
        this.queryParamSub.unsubscribe();
    }
}
