import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './course/course.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationPermissionService } from './services/navigation-permissions.service';
import { AuthService } from './services/auth.service';
import { DeactivateRouteGuardService } from './services/deactivate-route-guard.service';
import { FormsModule } from '@angular/forms';
import { ResolveRouteGuardService } from './services/resolve-route-guard.service';
import { CoursesService } from './services/courses.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        CoursesComponent,
        ErrorComponent,
        CourseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [AuthService, NavigationPermissionService, DeactivateRouteGuardService, ResolveRouteGuardService, CoursesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
