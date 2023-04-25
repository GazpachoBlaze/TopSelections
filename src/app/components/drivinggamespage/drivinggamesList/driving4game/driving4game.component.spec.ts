import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driving4gameComponent } from './driving4game.component';

describe('Driving4gameComponent', () => {
  let component: Driving4gameComponent;
  let fixture: ComponentFixture<Driving4gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Driving4gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driving4gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
