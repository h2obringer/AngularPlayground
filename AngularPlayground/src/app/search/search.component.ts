import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    constructor() { }

    ngOnInit(): void {

    }

    searchValue: string = "iPhone";

    changeSearchValue(eventData: Event) {
        this.searchValue = (<HTMLInputElement>eventData.target).value;
    }
}
