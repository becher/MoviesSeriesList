import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesTvRoutingModule } from './series-tv-routing.module';
import { SeriesTvStoreComponent } from './series-tv-store/series-tv-store.component';
import { SeriesTvCardComponent } from './series-tv-card/series-tv-card.component';
import { SeriesTvDetailsComponent } from './series-tv-details/series-tv-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SeriesTvStoreComponent,
    SeriesTvCardComponent,
    SeriesTvDetailsComponent
  ],
  imports: [
    CommonModule,
    SeriesTvRoutingModule,
    MatCardModule, 
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class SeriesTvModule { }
