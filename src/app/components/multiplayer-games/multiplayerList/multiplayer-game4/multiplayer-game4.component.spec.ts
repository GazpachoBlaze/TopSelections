import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGame4Component } from './multiplayer-game4.component';

describe('MultiplayerGame4Component', () => {
  let component: MultiplayerGame4Component;
  let fixture: ComponentFixture<MultiplayerGame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGame4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerGame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
