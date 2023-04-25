import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driving1gameComponent } from './driving1game.component';

describe('Driving1gameComponent', () => {
  let component: Driving1gameComponent;
  let fixture: ComponentFixture<Driving1gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Driving1gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driving1gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
