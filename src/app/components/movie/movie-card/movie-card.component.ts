import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResult } from 'src/app/models/list-result.interface';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{

  movies$?: Movie[];
  total$?: number;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    // get first movies pages
    this.getAllMoviesWithPageNumber(1);
  }

  getAllMoviesWithPageNumber(page : number){
    this.movieService.getAllMoviesWithPageNumber(page).subscribe({
      next : (result: ListResult<Movie>) => {
      this.movies$ = result.results;
    },
      error(err) {
        console.error(err);
    },
  })
  }

  movieById(index:number, movie: Movie) {
    return movie.id;
}
}
