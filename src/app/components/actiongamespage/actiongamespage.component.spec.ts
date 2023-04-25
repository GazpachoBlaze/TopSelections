import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiongamespageComponent } from './actiongamespage.component';

describe('ActiongamespageComponent', () => {
  let component: ActiongamespageComponent;
  let fixture: ComponentFixture<ActiongamespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiongamespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiongamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
