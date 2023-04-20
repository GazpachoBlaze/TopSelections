import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingGamesComponent } from './fighting-games.component';

describe('FightingGamesComponent', () => {
  let component: FightingGamesComponent;
  let fixture: ComponentFixture<FightingGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightingGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
