import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!users) return [];
    if (!searchText) return users;
    searchText = searchText.toLowerCase();
    return users.filter(user => {
      return user.name.toLowerCase().includes(searchText);
    });
  }
}
