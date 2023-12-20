import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesTvStoreComponent } from './series-tv-store/series-tv-store.component';
import { SeriesTvCardComponent } from './series-tv-card/series-tv-card.component';

const routes: Routes = [
  {  
    path:'',
    component: SeriesTvStoreComponent,
    children :[
      {
        path: '', 
        component : SeriesTvCardComponent
      },
         ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesTvRoutingModule { }
