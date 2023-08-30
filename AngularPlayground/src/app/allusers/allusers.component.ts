import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
    selector: 'app-allusers',
    templateUrl: './allusers.component.html',
    styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
    constructor(private userService: UserService) { }

    users: { name: string, isActive: boolean, job: string, gender: string, age: number }[] = [];

    ngOnInit(): void {
        this.users = this.userService.users;
    }

    ShowDetails(user: { name: string, isActive: boolean, job: string, gender: string, age: number }) {
        this.userService.ShowUserDetails(user);
    }
}
