import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';
import { NavigationPermissionService } from './services/navigation-permissions.service';
import { DeactivateRouteGuardService } from './services/deactivate-route-guard.service';
import { ResolveRouteGuardService } from './services/resolve-route-guard.service';

const appRoute: Routes = [
    { path: '', component: HomeComponent }, //'' = root URL/path
    // { path: '', redirectTo: 'Home', pathMatch: 'full' }, //redirect the root URL/path to the Home path
    { path: 'Home', component: HomeComponent },
    //canActivate: defines whether or not the route can be navigated to based on the NavigationPermissionService.canActivate() function.
    //canDeactivate: defines whether or not the user can navigate away from the page to a different route based on the DeactivateRouteGuardService.canDeactivate() function.
    { path: 'Contact', component: ContactComponent, canActivate: [NavigationPermissionService], canDeactivate: [DeactivateRouteGuardService] },
    //resolve: 
    { path: 'Courses', component: CoursesComponent, resolve: { 'courses': () => inject(ResolveRouteGuardService).resolve() } },
    { path: 'Courses/Course/:id', component: CourseComponent }, //example passing parameters to routes...
    {
        //example child routes
        //canActivateChild applies the guard to all child routes
        path: 'CoursesChildrenRoutes', canActivateChild: [NavigationPermissionService], children: [
            { path: 'Course/:id', component: CourseComponent }, //can apply canActivate guard on all child routes, or can simply list once on the parent with canActivateChildRoutes
            { path: 'Course/:name', component: CourseComponent },
        ]
    },
    { path: 'About', component: AboutComponent },
    { path: '**', component: ErrorComponent }, //wild card route - matches every route, should always go last
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute),
    ],
    exports: [
        RouterModule,
    ],
    bootstrap: [],
})
export class AppRoutingModule {

}