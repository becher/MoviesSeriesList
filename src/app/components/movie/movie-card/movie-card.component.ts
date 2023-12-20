/**
 * Represents a component that displays a list of movies in a card format.
 * @class MovieCardComponent
 * @implements {OnInit}
 */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subject, takeUntil } from 'rxjs';
import { ListResult } from 'src/app/models/list-result.interface';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit,OnDestroy {
  @ViewChild('paginator') paginator!: MatPaginator;
  movies?: Movie[];
  total?: number;
  searchStr: string = '';
  firstPage: number = 1;
  private destroy$ = new Subject();
  
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    // get first movies pages
    this.getMovies({ searchStr: '', page: this.firstPage });
  }

  movieById(_index: number, movie: Movie) {
    return movie.id;
  }

  /**
   * Changes the page of the movie list based on the given event.
   * @param {any} event - The event object containing the page index.
   * @returns None
   */
  changePage(event: any) {
    this.getMovies({ searchStr: this.searchStr, page: event.pageIndex + 1 });
  }

  /**
   * Retrieves movies based on the provided search string and page number.
   * If the search string is empty, it retrieves all movies with the specified page number.
   * Otherwise, it searches for movies that match the search string with the specified page number.
   * @param {Object} options - The options object containing the search string and page number.
   * @param {string} options.searchStr - The search string to filter movies.
   * @param {number} options.page - The page number to retrieve movies from.
   */
  getMovies({ searchStr, page }: { searchStr: string; page: number }) {
    if (searchStr.length == 0) {
      this.movieService.getAllMoviesWithPageNumber({ page })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: ListResult<Movie>) => {
          this.movies = result.results;
          this.total = result.total_results;
                  },
        error(err) {
          console.error(err);
        },
      });
    } else {
      this.movieService.searchMovies({ searchStr, page })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: ListResult<Movie>) => {
          this.movies = result.results;
          this.total = result.total_results;
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

  ngOnDestroy(): void {
    this.destroy$.next;  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }

}
