import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivinggamespageComponent } from './drivinggamespage.component';

describe('DrivinggamespageComponent', () => {
  let component: DrivinggamespageComponent;
  let fixture: ComponentFixture<DrivinggamespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivinggamespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivinggamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
