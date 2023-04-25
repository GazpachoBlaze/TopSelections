import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayergamespageComponent } from './multiplayergamespage.component';

describe('MultiplayergamespageComponent', () => {
  let component: MultiplayergamespageComponent;
  let fixture: ComponentFixture<MultiplayergamespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayergamespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplayergamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
