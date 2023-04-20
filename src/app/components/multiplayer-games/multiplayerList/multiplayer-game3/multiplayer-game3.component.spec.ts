import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGame3Component } from './multiplayer-game3.component';

describe('MultiplayerGame3Component', () => {
  let component: MultiplayerGame3Component;
  let fixture: ComponentFixture<MultiplayerGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGame3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
