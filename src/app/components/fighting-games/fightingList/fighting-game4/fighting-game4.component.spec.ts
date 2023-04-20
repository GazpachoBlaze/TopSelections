import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGame4Component } from './fighting-game4.component';

describe('FightingGame4Component', () => {
  let component: FightingGame4Component;
  let fixture: ComponentFixture<FightingGame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGame4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
