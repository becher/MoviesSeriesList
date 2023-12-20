import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCropWords'
})
export class TitleCropWordsPipe implements PipeTransform {
  transform(str: string, length:number): string {
    return str.length <= length ? str : str.substring(0, length - 3) + '...';
  }

}
