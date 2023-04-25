import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer1gameComponent } from './multiplayer1game.component';

describe('Multiplayer1gameComponent', () => {
  let component: Multiplayer1gameComponent;
  let fixture: ComponentFixture<Multiplayer1gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplayer1gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplayer1gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
