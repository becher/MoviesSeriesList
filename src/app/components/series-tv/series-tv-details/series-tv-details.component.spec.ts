import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTvDetailsComponent } from './series-tv-details.component';

describe('SeriesTvDetailsComponent', () => {
  let component: SeriesTvDetailsComponent;
  let fixture: ComponentFixture<SeriesTvDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesTvDetailsComponent]
    });
    fixture = TestBed.createComponent(SeriesTvDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
