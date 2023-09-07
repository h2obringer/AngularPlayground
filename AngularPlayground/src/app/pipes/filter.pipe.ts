import { Pipe, PipeTransform } from "@angular/core";
import { Customer } from "../customer-list/customer";

//NOTE: The angular team recommends NOT to use Pipes in order to filter and sort data due to its performance impacts, especially if no implements appropriately
@Pipe({
    name: 'filterCourse',
    pure: true //this is set to true by default. Pure pipes are triggered only when a pure change is made on the value the pipe is applied to. (Primitive values, or a reference of a complex object has changes)
    //impure pipes are executed on every change detection cycle (and therefore has bad performance impacts.)
})
export class FilterPipe implements PipeTransform {
    transform(customers: Customer[], filterText: string) {
        if (customers.length === 0 || filterText === '') {
            return customers;
        } else {
            return customers.filter((customer) => {
                return customer.country.toLowerCase() === filterText.toLowerCase();
            });
        }
    }
}