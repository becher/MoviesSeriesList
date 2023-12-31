import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnDestroy{
 
  id!: number;
  movie?: Movie;
  big_imageUrl: string = 'https://image.tmdb.org/t/p/w1280';
  small_imageUrl: string = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  private destroy$ = new Subject();
  
  /**
   * Constructs a new instance of the component.
   * @param {ActivatedRoute} router - The router service for accessing route parameters.
   * @param {MovieService} movieService - The movie service for retrieving movie details.
   * @returns None
   */
  constructor(
    private router: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.getSingleMoviesDetails({ id: this.id });
  }

  /**
   * Retrieves the details of a single movie by its ID.
   * @param {number} id - The ID of the movie to retrieve.
   * @returns None
   */
  getSingleMoviesDetails({ id }: { id: number; }): void {
    this.movieService.getMovieById({ id })
    .pipe(takeUntil(this.destroy$))
    .subscribe((result: Movie) => {
      this.movie = result;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next;  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }
}
