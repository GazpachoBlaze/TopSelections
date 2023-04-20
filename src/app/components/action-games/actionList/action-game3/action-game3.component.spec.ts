import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGame3Component } from './action-game3.component';

describe('ActionGame3Component', () => {
  let component: ActionGame3Component;
  let fixture: ComponentFixture<ActionGame3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGame3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGame3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
