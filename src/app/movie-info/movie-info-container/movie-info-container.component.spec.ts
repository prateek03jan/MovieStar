import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoContainerComponent } from './movie-info-container.component';

describe('MovieInfoContainerComponent', () => {
  let component: MovieInfoContainerComponent;
  let fixture: ComponentFixture<MovieInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInfoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
