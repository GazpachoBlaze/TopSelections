import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Driving2gameComponent } from './driving2game.component';

describe('Driving2gameComponent', () => {
  let component: Driving2gameComponent;
  let fixture: ComponentFixture<Driving2gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Driving2gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Driving2gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
