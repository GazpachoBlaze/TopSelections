import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action2gameComponent } from './action2game.component';

describe('Action2gameComponent', () => {
  let component: Action2gameComponent;
  let fixture: ComponentFixture<Action2gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Action2gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action2gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
