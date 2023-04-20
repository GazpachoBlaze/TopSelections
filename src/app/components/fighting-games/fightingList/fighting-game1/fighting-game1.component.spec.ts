import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGame1Component } from './fighting-game1.component';

describe('FightingGame1Component', () => {
  let component: FightingGame1Component;
  let fixture: ComponentFixture<FightingGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGame1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
