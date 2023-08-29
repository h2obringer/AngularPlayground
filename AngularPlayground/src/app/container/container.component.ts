import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserService } from '../Services/user.service';
import { LoggerService } from '../Services/logger.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [UserService, LoggerService], //inject the dependencies from dependency injection, this step could be done in app.module or app.component instead...
})
export class ContainerComponent implements OnInit {
    constructor(private userService: UserService, private loggerService: LoggerService) { } //inject the dependencies from dependency injection
    ngOnInit() {
        this.users = this.userService.users;
    }

    users: { name: string, isActive: boolean }[] = [];

    @ViewChild(FooterComponent, { static: true }) footerComp: FooterComponent;
}