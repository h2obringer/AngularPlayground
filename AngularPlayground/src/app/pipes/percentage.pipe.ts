import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
    transform(value: any, denominator: number, decimal: number) {
        return (value / denominator * 100).toFixed(decimal);
    }
}