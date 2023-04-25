import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer2gameComponent } from './multiplayer2game.component';

describe('Multiplayer2gameComponent', () => {
  let component: Multiplayer2gameComponent;
  let fixture: ComponentFixture<Multiplayer2gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplayer2gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplayer2gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
