import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer5gameComponent } from './multiplayer5game.component';

describe('Multiplayer5gameComponent', () => {
  let component: Multiplayer5gameComponent;
  let fixture: ComponentFixture<Multiplayer5gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplayer5gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplayer5gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
