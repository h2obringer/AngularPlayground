import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    constructor() { }

    ngOnInit(): void {

    }

    searchValue: string = "";

    changeSearchValue(eventData: Event) {
        this.searchValue = (<HTMLInputElement>eventData.target).value;
    }

    @Output()
    searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

    onSearchTextChanged() {
        this.searchTextChanged.emit(this.searchValue);
    }
}
