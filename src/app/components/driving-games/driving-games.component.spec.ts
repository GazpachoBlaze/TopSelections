import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGamesComponent } from './driving-games.component';

describe('DrivingGamesComponent', () => {
  let component: DrivingGamesComponent;
  let fixture: ComponentFixture<DrivingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
