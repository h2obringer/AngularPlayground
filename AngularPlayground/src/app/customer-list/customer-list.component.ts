import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
    constructor() { }

    selectedCustomer: Customer = new Customer();
    _filterText: string = '';
    filteredCustomers: Customer[];
    asyncWarning = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Are you still there? (Async pipe example)');
        }, 2000);
    });

    customers: Customer[] = [
        { customerNo: 1, name: 'Mark Vought', address: '', city: 'London', country: 'UK' },
        { customerNo: 2, name: 'John Smith', address: '', city: 'New York', country: 'USA' },
        { customerNo: 3, name: 'Merry Ann', address: '', city: 'Berlin', country: 'Germany' },
        { customerNo: 4, name: 'Rajesh Khatri', address: '', city: 'Mumbai', country: 'India' },
        { customerNo: 5, name: 'Rahul Raj', address: '', city: 'Delhi', country: 'India' },
    ];

    ngOnInit(): void {
        this.filteredCustomers = this.customers;
    }

    get filterText() {
        return this._filterText;
    }

    set filterText(value: string) {
        this._filterText = value;
        this.filteredCustomers = this.doFilterCustomers(this._filterText);
    }

    doFilterCustomers(filterTerm: string) {
        if (this.customers.length === 0 || filterTerm === '') {
            return this.customers;
        } else {
            return this.customers.filter((customer) => {
                return customer.country.toLowerCase() === filterTerm.toLowerCase();
            });
        }
    }

    //not hooked to front end atm, but as an example to complete filtering via the component class, we provide this...
    addCustomer(customer: Customer) {
        this.customers.push(customer);
        this.filteredCustomers = this.doFilterCustomers(this._filterText);
    }

    //not hooked to front end atm, but as an example to complete filtering via the component class, we provide this...
    updateCustomer(customer: Customer, index: number) {
        this.customers[index] = customer;
        this.filteredCustomers = this.doFilterCustomers(this._filterText);
    }
}
