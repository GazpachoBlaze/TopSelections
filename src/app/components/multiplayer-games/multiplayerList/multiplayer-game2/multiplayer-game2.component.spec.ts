import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGame2Component } from './multiplayer-game2.component';

describe('MultiplayerGame2Component', () => {
  let component: MultiplayerGame2Component;
  let fixture: ComponentFixture<MultiplayerGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGame2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
