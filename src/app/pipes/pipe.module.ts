import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleCropWordsPipe} from "./title-crop-words.pipe";
import { TimePipe } from './time.pipe';
import { LanguagePipe } from './language.pipe';
 



@NgModule({
  declarations: [TitleCropWordsPipe, TimePipe, LanguagePipe],
  exports: [
    CommonModule,TitleCropWordsPipe, TimePipe, LanguagePipe
  ]
})
export class PipeModule { }
