import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStoreComponent } from './movie-store.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieStoreComponent', () => {
let component: MovieStoreComponent;
let fixture: ComponentFixture<MovieStoreComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [MovieStoreComponent],
imports: [RouterTestingModule]
});
fixture = TestBed.createComponent(MovieStoreComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
