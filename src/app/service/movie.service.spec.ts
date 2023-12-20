import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MovieService } from './movie.service';


describe('MovieService', () => {
  let service: MovieService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }); 
    
    service = TestBed.inject(MovieService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getAllMovies and return an array of movies', () => {
			
 
    service.getAllMovies(1).subscribe((res) => {
      
      expect(res.results.length).toBeGreaterThan(1);
    });
 
  });
});
