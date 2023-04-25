import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Action1gameComponent } from './action1game.component';

describe('Action1gameComponent', () => {
  let component: Action1gameComponent;
  let fixture: ComponentFixture<Action1gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Action1gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Action1gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
