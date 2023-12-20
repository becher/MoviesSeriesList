import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesTvStoreComponent } from './series-tv-store.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('SeriesTvStoreComponent', () => {
let component: SeriesTvStoreComponent;
let fixture: ComponentFixture<SeriesTvStoreComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
    imports: [    
        RouterTestingModule    
      ],
declarations: [SeriesTvStoreComponent]
});
fixture = TestBed.createComponent(SeriesTvStoreComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
