import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterflights'
})
export class FilterflightsPipe implements PipeTransform {

    transform(values: any[], value: any): any {
        if (value === "checkIn")
            return values.filter((item) => (item.checkIn === true));
        else if (value === "infant")
            return values.filter((item) => (item.category === value));
        else if (value == "wheelchair")
            return values.filter((item) => (item.category === value));
        else if (value === null)
            return values.filter((item) => (item));
    }

}




