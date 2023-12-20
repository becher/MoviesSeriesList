import { TestBed } from '@angular/core/testing';

import { SeriesTVService } from './series-tv.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeriesTVService', () => {
  let service: SeriesTVService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SeriesTVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllSeriesTv and return an array of series tv', () => {
			
 
    service.getAllSeriesTvWithPageNumber(1).subscribe((res) => {
      
      expect(res.results.length).toBeGreaterThan(1);
    });
 
  });
});
