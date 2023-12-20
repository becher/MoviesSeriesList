import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ListResult } from 'src/app/models/list-result.interface';
import { SeriesTv } from 'src/app/models/seriesTV.interface';
import { SeriesTVService } from 'src/app/service/series-tv.service';

@Component({
  selector: 'app-series-tv-card',
  templateUrl: './series-tv-card.component.html',
  styleUrls: ['./series-tv-card.component.scss'],
})
export class SeriesTvCardComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  seriesTv?: SeriesTv[];
  total$?: number;
  searchStr: string = '';
  firstPage: number = 1;

  constructor(private seriesTVService: SeriesTVService) {}

  ngOnInit() {
    // get first series tv page
    this.getSeriesTv(this.searchStr, this.firstPage);
  }

  getSeriesTv(searchStr: string, page: number) {
    if (searchStr.length == 0) {
      this.seriesTVService.getAllSeriesTvWithPageNumber(page).subscribe({
        next: (result: ListResult<SeriesTv>) => {
          this.seriesTv = result.results;
          this.total$ = result.total_results;
        },
        error(err) {
          console.error(err);
        },
      });
    } else {
      this.seriesTVService.searchSeriesTv(searchStr, page).subscribe({
        next: (result: ListResult<SeriesTv>) => {
          this.seriesTv = result.results;
          this.total$ = result.total_results;
        },
        error(err) {
          console.error(err);
        },
      });
    }
  }

  serieTvById(index: number, seriesTv: SeriesTv) {
    return seriesTv.id;
  }

  changePage(event: any) {
    this.getSeriesTv(this.searchStr, event.pageIndex + 1);
  }

  onKey(event: any) {
    this.searchStr = event.target.value;
    this.getSeriesTv(this.searchStr, this.firstPage);
    this.paginator.firstPage();
  }
}
