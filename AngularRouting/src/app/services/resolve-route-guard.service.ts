import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';

@Injectable()
export class ResolveRouteGuardService implements Resolve<any>{
    constructor(private coursesService: CoursesService) { }

    resolve() {
        this.coursesService.getAllCourses().then((data) => {
            return data;
        });
    }
}