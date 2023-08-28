import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { EnrollService } from '../Services/enroll.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [EnrollService],
})
export class ContainerComponent {
    constructor(private enrollService: EnrollService) { }
    ngOnInit() { }

    @ViewChild(FooterComponent, { static: true }) footerComp: FooterComponent;
}