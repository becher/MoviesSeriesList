import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesTvStoreComponent } from './series-tv-store/series-tv-store.component';
import { SeriesTvCardComponent } from './series-tv-card/series-tv-card.component';
import { SeriesTvDetailsComponent } from './series-tv-details/series-tv-details.component';

const routes: Routes = [
  {  
    path:'',
    component: SeriesTvStoreComponent,
    children :[
      {
        path: '', 
        component : SeriesTvCardComponent
      },
      {
        path: 'details/:id', 
        component: SeriesTvDetailsComponent
      }
         ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesTvRoutingModule { }
