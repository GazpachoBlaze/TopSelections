import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action4gameComponent } from './action4game.component';

describe('Action4gameComponent', () => {
  let component: Action4gameComponent;
  let fixture: ComponentFixture<Action4gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Action4gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action4gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
