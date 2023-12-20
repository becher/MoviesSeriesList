import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieStoreComponent } from './movie-store/movie-store.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatPaginatorModule} from "@angular/material/paginator";
import { PipeModule } from "../../pipes/pipe.module";


@NgModule({
    declarations: [
        MovieDetailsComponent,
        MovieCardComponent,
        MovieStoreComponent
    ],
    imports: [
        CommonModule,
        MovieRoutingModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatPaginatorModule,
        PipeModule
    ]
})
export class MovieModule { }
