import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesTvRoutingModule } from './series-tv-routing.module';
import { SeriesTvStoreComponent } from './series-tv-store/series-tv-store.component';
import { SeriesTvCardComponent } from './series-tv-card/series-tv-card.component';
import { SeriesTvDetailsComponent } from './series-tv-details/series-tv-details.component';


@NgModule({
  declarations: [
    SeriesTvStoreComponent,
    SeriesTvCardComponent,
    SeriesTvDetailsComponent
  ],
  imports: [
    CommonModule,
    SeriesTvRoutingModule
  ]
})
export class SeriesTvModule { }
