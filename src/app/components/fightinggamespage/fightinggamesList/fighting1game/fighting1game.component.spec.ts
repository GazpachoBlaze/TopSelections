import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fighting1gameComponent } from './fighting1game.component';

describe('Fighting1gameComponent', () => {
  let component: Fighting1gameComponent;
  let fixture: ComponentFixture<Fighting1gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fighting1gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fighting1gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
