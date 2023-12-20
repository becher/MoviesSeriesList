import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieCardComponent', () => {
let component: MovieCardComponent;
let fixture: ComponentFixture<MovieCardComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [MovieCardComponent],
imports:[HttpClientTestingModule]
});
fixture = TestBed.createComponent(MovieCardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
