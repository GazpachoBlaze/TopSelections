import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driving5gameComponent } from './driving5game.component';

describe('Driving5gameComponent', () => {
  let component: Driving5gameComponent;
  let fixture: ComponentFixture<Driving5gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Driving5gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driving5gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
