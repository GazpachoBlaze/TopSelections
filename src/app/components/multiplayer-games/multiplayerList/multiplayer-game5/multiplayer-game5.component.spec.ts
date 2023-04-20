import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGame5Component } from './multiplayer-game5.component';

describe('MultiplayerGame5Component', () => {
  let component: MultiplayerGame5Component;
  let fixture: ComponentFixture<MultiplayerGame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGame5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayerGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
