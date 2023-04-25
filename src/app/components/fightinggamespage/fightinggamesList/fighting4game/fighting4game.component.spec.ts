import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighting4gameComponent } from './fighting4game.component';

describe('Fighting4gameComponent', () => {
  let component: Fighting4gameComponent;
  let fixture: ComponentFixture<Fighting4gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fighting4gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighting4gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
