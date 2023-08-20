import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        ContainerComponent,
        HeaderComponent,
        FooterComponent,
        NotificationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
