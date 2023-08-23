import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    constructor() { }

    ngOnInit(): void { }

    products = [
        { id: 1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: '/assets/' },
        { id: 2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: '/assets/' },
        { id: 3, name: 'Apple iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: '/assets/' },
        { id: 4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', image: '/assets/' },
        { id: 5, name: 'LG Refrigerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', image: '/assets/' },
        { id: 6, name: 'Dell Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', image: '/assets/' }
    ];
}
