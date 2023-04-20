import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGame4Component } from './action-game4.component';

describe('ActionGame4Component', () => {
  let component: ActionGame4Component;
  let fixture: ComponentFixture<ActionGame4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGame4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGame4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
