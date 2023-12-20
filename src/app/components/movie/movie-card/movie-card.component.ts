import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ListResult } from 'src/app/models/list-result.interface';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  movies$?: Movie[];
  total$?: number;
  searchStr: string = '';
  firstPage: number = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // get first movies pages
    this.getMovies({ searchStr: '', page: this.firstPage });
  }

  movieById(_index: number, movie: Movie) {
    return movie.id;
  }

  changePage(event: any) {
    this.getMovies({ searchStr: this.searchStr, page: event.pageIndex + 1 });
  }

  getMovies({ searchStr, page }: { searchStr: string; page: number; }) {
    if (searchStr.length == 0) {
      this.movieService.getAllMoviesWithPageNumber({ page }).subscribe({
        next: (result: ListResult<Movie>) => {
          this.movies$ = result.results;
          this.total$ = result.total_results;
        },
        error(err) {
          console.error(err);
        },
      });
    } else {
      this.movieService.searchMovies({ searchStr, page }).subscribe({
        next: (result: ListResult<Movie>) => {
          this.movies$ = result.results;
          this.total$ = result.total_results;
        },
        error(err) {
          console.error(err);
        },
      });
    }
  }

  onKey(event: any) {
    this.searchStr = event.target.value;
    this.getMovies({ searchStr: this.searchStr, page: this.firstPage });
    this.paginator.firstPage();
  }
}
