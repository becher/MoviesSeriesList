import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SeriesTv } from 'src/app/models/seriesTV.interface';
import { SeriesTVService } from 'src/app/service/series-tv.service';

@Component({
  selector: 'app-series-tv-details',
  templateUrl: './series-tv-details.component.html',
  styleUrls: ['./series-tv-details.component.scss']
})
export class SeriesTvDetailsComponent implements OnDestroy{

  id!: number;
  serieTv?: SeriesTv;
  big_imageUrl: string = 'https://image.tmdb.org/t/p/w1280';
  small_imageUrl: string = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';
  private destroy$ = new Subject();
  
  constructor(
    private router: ActivatedRoute,
    private seriesTVService: SeriesTVService
  ) {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.getSingleSerieTvDetails({ id: this.id });
  }

  getSingleSerieTvDetails({ id }: { id: number; }): void {
    this.seriesTVService.getSerieTvById({ id })
    .pipe(takeUntil(this.destroy$))
    .subscribe((result: SeriesTv) => {
      this.serieTv = result;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next;  // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }
}
