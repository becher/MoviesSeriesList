import { Pipe, PipeTransform } from '@angular/core';
import { languages } from '../../assets/translation/languages';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(iso: any): any {
    const fullLang = languages.find(lang => lang.iso_639_1 === iso);

    if (fullLang) {
      return fullLang.english_name;
    }
  
    return iso;
  }

}
