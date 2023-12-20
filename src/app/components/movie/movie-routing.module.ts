import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieStoreComponent } from './movie-store/movie-store.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {  
    path:'',
    component: MovieStoreComponent,
    children :[
      {
        path: '', 
        component : MovieCardComponent
      },
      {
        path: 'details/:id', 
        component: MovieDetailsComponent
      }
         ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
