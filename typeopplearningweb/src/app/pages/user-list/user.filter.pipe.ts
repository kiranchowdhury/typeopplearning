import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter',
  pure: false
})
export class UserFilter implements PipeTransform {
  transform (items: any[], filterText: string): any[] {
    if (!items || filterText.length==0) {
      return items;
    }
    let returnList = items.filter(data =>
      ((data.fullname).toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
      || (data.email.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
     );

    return returnList;
  }
}
