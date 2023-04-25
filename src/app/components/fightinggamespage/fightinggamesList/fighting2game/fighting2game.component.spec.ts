import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighting2gameComponent } from './fighting2game.component';

describe('Fighting2gameComponent', () => {
  let component: Fighting2gameComponent;
  let fixture: ComponentFixture<Fighting2gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fighting2gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighting2gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
