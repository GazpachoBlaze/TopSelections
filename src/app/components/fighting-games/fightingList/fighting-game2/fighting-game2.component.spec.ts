import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGame2Component } from './fighting-game2.component';

describe('FightingGame2Component', () => {
  let component: FightingGame2Component;
  let fixture: ComponentFixture<FightingGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGame2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
