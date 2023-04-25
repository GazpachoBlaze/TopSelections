import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighting3gameComponent } from './fighting3game.component';

describe('Fighting3gameComponent', () => {
  let component: Fighting3gameComponent;
  let fixture: ComponentFixture<Fighting3gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fighting3gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighting3gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
