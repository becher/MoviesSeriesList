import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'movies',
    loadChildren : () => import('./components/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path:'series',
    loadChildren : () => import('./components/series-tv/series-tv.module').then(m => m.SeriesTvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
