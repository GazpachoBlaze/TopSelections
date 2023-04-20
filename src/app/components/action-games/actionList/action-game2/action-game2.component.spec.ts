import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGame2Component } from './action-game2.component';

describe('ActionGame2Component', () => {
  let component: ActionGame2Component;
  let fixture: ComponentFixture<ActionGame2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGame2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
