import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionGame5Component } from './action-game5.component';

describe('ActionGame5Component', () => {
  let component: ActionGame5Component;
  let fixture: ComponentFixture<ActionGame5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGame5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionGame5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
