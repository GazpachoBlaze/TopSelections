import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGame2Component } from './driving-game2.component';

describe('DrivingGame2Component', () => {
  let component: DrivingGame2Component;
  let fixture: ComponentFixture<DrivingGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGame2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
