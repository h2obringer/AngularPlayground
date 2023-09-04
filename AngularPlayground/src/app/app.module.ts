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
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SetBackgroundDirective } from './CustomeDirectives/AttributeDirectives/setbackground.directive';
import { HighlightDirective } from './CustomeDirectives/AttributeDirectives/highlight.directive';
import { HoverDirective } from './CustomeDirectives/AttributeDirectives/hover.directive';
import { Highlight2Directive } from './CustomeDirectives/AttributeDirectives/highlight2.directive';
import { ClassDirective } from './CustomeDirectives/AttributeDirectives/class.directive';
import { StyleDirective } from './CustomeDirectives/AttributeDirectives/styles.directive';
import { IfDirective } from './CustomeDirectives/StructuralDirectives/if.directive';
import { EnrollService } from './Services/enroll.service';
import { AdduserComponent } from './adduser/adduser.component';
import { LoggerService } from './Services/logger.service';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        ContainerComponent,
        HeaderComponent,
        FooterComponent,
        NotificationComponent,
        SearchComponent,
        ProductsComponent,
        FilterComponent,
        CustomerListComponent,
        SetBackgroundDirective,
        HighlightDirective,
        HoverDirective,
        Highlight2Directive,
        ClassDirective,
        StyleDirective,
        IfDirective,
        AdduserComponent,
        AllusersComponent,
        UserdetailComponent,
        PercentagePipe,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        FormsModule,
    ],
    providers: [EnrollService, LoggerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
