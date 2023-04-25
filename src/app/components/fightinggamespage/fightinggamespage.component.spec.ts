import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightinggamespageComponent } from './fightinggamespage.component';

describe('FightinggamespageComponent', () => {
  let component: FightinggamespageComponent;
  let fixture: ComponentFixture<FightinggamespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FightinggamespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightinggamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
