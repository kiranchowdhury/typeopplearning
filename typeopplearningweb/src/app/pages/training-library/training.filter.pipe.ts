import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'trainingFilter',
    pure: false
})
export class TrainingFilter implements PipeTransform {
    transform(items: any[], filterText: string): any[] {
        console.log("===");
        console.log(filterText);

        if (!items || filterText.length==0) {
            return items;
        }
        let returnList = items.filter(data =>
          ((data.equipmentCategory).toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
          || (data.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
          || (data.date.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) );

          console.log(returnList);

        return returnList;
    }
}
