import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGame3Component } from './fighting-game3.component';

describe('FightingGame3Component', () => {
  let component: FightingGame3Component;
  let fixture: ComponentFixture<FightingGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGame3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
