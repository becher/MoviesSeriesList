import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatPaginatorModule} from "@angular/material/paginator";

describe('MovieCardComponent', () => {
let component: MovieCardComponent;
let fixture: ComponentFixture<MovieCardComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [MovieCardComponent],
imports:[HttpClientTestingModule,MatPaginatorModule]
});
fixture = TestBed.createComponent(MovieCardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
