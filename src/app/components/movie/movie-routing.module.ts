import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieStoreComponent } from '../movie-store/movie-store.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

const routes: Routes = [
  {  
    path:'',
    component: MovieStoreComponent,
    children :[
      {
        path: '', 
        component : MovieCardComponent
      },
         ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
