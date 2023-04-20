import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGame1Component } from './multiplayer-game1.component';

describe('MultiplayerGame1Component', () => {
  let component: MultiplayerGame1Component;
  let fixture: ComponentFixture<MultiplayerGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGame1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
