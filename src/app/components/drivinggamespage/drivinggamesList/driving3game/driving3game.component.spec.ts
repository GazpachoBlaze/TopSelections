import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driving3gameComponent } from './driving3game.component';

describe('Driving3gameComponent', () => {
  let component: Driving3gameComponent;
  let fixture: ComponentFixture<Driving3gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Driving3gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driving3gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
