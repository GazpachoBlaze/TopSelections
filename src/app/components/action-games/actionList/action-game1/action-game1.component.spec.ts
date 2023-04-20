import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGame1Component } from './action-game1.component';

describe('ActionGame1Component', () => {
  let component: ActionGame1Component;
  let fixture: ComponentFixture<ActionGame1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGame1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
