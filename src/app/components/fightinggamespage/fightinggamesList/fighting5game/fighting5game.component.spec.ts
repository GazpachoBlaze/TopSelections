import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighting5gameComponent } from './fighting5game.component';

describe('Fighting5gameComponent', () => {
  let component: Fighting5gameComponent;
  let fixture: ComponentFixture<Fighting5gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fighting5gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighting5gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
