import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    @Input('total') all: number = 0;
    @Input('available') available: number = 0;
    @Input('unavailable') unavailable: number = 0;


}
