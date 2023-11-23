import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../models/Pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): Pet[] {
    searchText.toLowerCase();
    return pets.filter(pets => pets.name.toLowerCase().includes(searchText.toLowerCase()));
  }

}
