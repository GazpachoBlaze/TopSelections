import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGame1Component } from './driving-game1.component';

describe('DrivingGame1Component', () => {
  let component: DrivingGame1Component;
  let fixture: ComponentFixture<DrivingGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGame1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
