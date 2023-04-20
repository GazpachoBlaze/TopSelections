import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingGame3Component } from './driving-game3.component';

describe('DrivingGame3Component', () => {
  let component: DrivingGame3Component;
  let fixture: ComponentFixture<DrivingGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingGame3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivingGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
