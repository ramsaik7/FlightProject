import { Pipe, PipeTransform } from '@angular/core';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Pipe({
    name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

    transform(values: any[], value: any): any {
        if (value === "passport")
            return values.filter((item) => (item.passport === null || item.passport === ""));
        else if (value === "address")
            return values.filter((item) => (item.address === null || item.address === ""));
        else if (value == "DOB")
            return values.filter((item) => (item.DOB === null || item.DOB === ""));

        else
            return values.filter((item) => (item));
    }

}




