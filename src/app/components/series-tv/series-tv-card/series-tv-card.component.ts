import { Component } from '@angular/core';
import { ListResult } from 'src/app/models/list-result.interface';
import { SeriesTv } from 'src/app/models/seriesTV.interface';
import { SeriesTVService } from 'src/app/service/series-tv.service';

@Component({
  selector: 'app-series-tv-card',
  templateUrl: './series-tv-card.component.html',
  styleUrls: ['./series-tv-card.component.scss']
})
export class SeriesTvCardComponent {
  seriesTv$?: SeriesTv[];

  constructor(private seriesTVService: SeriesTVService) {

  }

  ngOnInit() {
    // get first movies pages
    this.getAllSeriesTvWithPageNumber(1);
  }

  getAllSeriesTvWithPageNumber(page : number){
    this.seriesTVService.getAllSeriesTvWithPageNumber(page).subscribe({
      next : (result: ListResult<SeriesTv>) => {
      this.seriesTv$ = result.results;
    },
      error(err) {
        console.error(err);
    },
  })
  }

  movieById(index:number, seriesTv: SeriesTv) {
    return seriesTv.id;
}
}
