import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer4gameComponent } from './multiplayer4game.component';

describe('Multiplayer4gameComponent', () => {
  let component: Multiplayer4gameComponent;
  let fixture: ComponentFixture<Multiplayer4gameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Multiplayer4gameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multiplayer4gameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
