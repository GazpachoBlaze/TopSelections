import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer3gameComponent } from './multiplayer3game.component';

describe('Multiplayer3gameComponent', () => {
  let component: Multiplayer3gameComponent;
  let fixture: ComponentFixture<Multiplayer3gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplayer3gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplayer3gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
