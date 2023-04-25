import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action5gameComponent } from './action5game.component';

describe('Action5gameComponent', () => {
  let component: Action5gameComponent;
  let fixture: ComponentFixture<Action5gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Action5gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action5gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
