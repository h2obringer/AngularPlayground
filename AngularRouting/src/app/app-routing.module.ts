import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';

const appRoute: Routes = [
    { path: '', component: HomeComponent }, //'' = root URL/path
    // { path: '', redirectTo: 'Home', pathMatch: 'full' }, //redirect the root URL/path to the Home path
    { path: 'Home', component: HomeComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Courses', component: CoursesComponent },
    { path: 'Courses/Course/:id', component: CourseComponent }, //example passing parameters to routes...
    { //example child routes
        path: 'CoursesChildrenRoutes', children: [
            { path: 'Course/:id', component: CourseComponent }
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