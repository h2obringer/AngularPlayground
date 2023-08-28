import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { UserService } from '../Services/user.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [UserService],
})
export class ContainerComponent implements OnInit {
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.users = this.userService.users;
    }

    users: { name: string, isActive: boolean }[] = [];

    @ViewChild(FooterComponent, { static: true }) footerComp: FooterComponent;
}