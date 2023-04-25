import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action3gameComponent } from './action3game.component';

describe('Action3gameComponent', () => {
  let component: Action3gameComponent;
  let fixture: ComponentFixture<Action3gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Action3gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action3gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
