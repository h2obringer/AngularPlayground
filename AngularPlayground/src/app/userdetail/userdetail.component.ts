import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
    selector: 'app-userdetail',
    templateUrl: './userdetail.component.html',
    styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
    constructor(private userService: UserService) { }

    user: { name: string, isActive: boolean, job: string, gender: string, age: number };

    ngOnInit(): void {
        this.userService.OnShowDetailsClicked.subscribe((data: { name: string, isActive: boolean, job: string, gender: string, age: number }) => {
            this.user = data;
        });
    }
}
