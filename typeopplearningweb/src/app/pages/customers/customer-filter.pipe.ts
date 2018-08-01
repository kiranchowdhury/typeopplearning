import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'customerFilter',
    pure: false
})
export class CustomerFilter implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        //console.log(items); 
        //console.log(filterText);
   
        if (!items || filterText.length==0) {
            return items;
        }
        
        return items.filter(data => 
            (data.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
            || (data.contactName.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
            || ((data.noOfUsers+'').toLowerCase().indexOf(filterText.toLowerCase()) !== -1));
    }
}