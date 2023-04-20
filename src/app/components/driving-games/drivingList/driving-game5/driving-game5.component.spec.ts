import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGame5Component } from './driving-game5.component';

describe('DrivingGame5Component', () => {
  let component: DrivingGame5Component;
  let fixture: ComponentFixture<DrivingGame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGame5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
