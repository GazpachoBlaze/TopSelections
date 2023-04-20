import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGame4Component } from './driving-game4.component';

describe('DrivingGame4Component', () => {
  let component: DrivingGame4Component;
  let fixture: ComponentFixture<DrivingGame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGame4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
