import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTvDetailsComponent } from './series-tv-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PipeModule } from 'src/app/pipes/pipe.module';

describe('SeriesTvDetailsComponent', () => {
  let component: SeriesTvDetailsComponent;
  let fixture: ComponentFixture<SeriesTvDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesTvDetailsComponent],
      imports: [RouterTestingModule,HttpClientTestingModule,PipeModule]
    });
    fixture = TestBed.createComponent(SeriesTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
