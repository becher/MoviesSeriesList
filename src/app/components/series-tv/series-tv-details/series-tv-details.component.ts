import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesTv } from 'src/app/models/seriesTV.interface';
import { SeriesTVService } from 'src/app/service/series-tv.service';

@Component({
  selector: 'app-series-tv-details',
  templateUrl: './series-tv-details.component.html',
  styleUrls: ['./series-tv-details.component.scss']
})
export class SeriesTvDetailsComponent {

  id!: number;
  serieTv$?: SeriesTv;
  big_imageUrl: string = 'https://image.tmdb.org/t/p/w1280';
  small_imageUrl: string = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/';

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
    this.seriesTVService.getSerieTvById({ id }).subscribe((result: SeriesTv) => {
      this.serieTv$ = result;
    });
  }
}
