import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGame5Component } from './fighting-game5.component';

describe('FightingGame5Component', () => {
  let component: FightingGame5Component;
  let fixture: ComponentFixture<FightingGame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGame5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
