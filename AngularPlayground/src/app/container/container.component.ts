import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    constructor() { }
    ngOnInit() { }

    @ViewChild(FooterComponent, { static: true }) footerComp: FooterComponent;
}