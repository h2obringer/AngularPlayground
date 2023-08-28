import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
    selector: 'app-adduser',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
    userName: string = '';
    isActive: boolean = true;

    constructor(private userService: UserService) { }

    ngOnInit(): void {

    }

    AddUser() {
        this.userService.AddNewUser(this.userName, this.isActive);
    }

}
