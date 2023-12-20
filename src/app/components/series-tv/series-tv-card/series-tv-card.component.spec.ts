import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTvCardComponent } from './series-tv-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeriesTvCardComponent', () => {
  let component: SeriesTvCardComponent;
  let fixture: ComponentFixture<SeriesTvCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesTvCardComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(SeriesTvCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
