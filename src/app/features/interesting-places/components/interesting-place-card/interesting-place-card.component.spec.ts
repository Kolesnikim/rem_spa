import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingPlaceCardComponent } from './interesting-place-card.component';

describe('InterestingPlaceCardComponent', () => {
  let component: InterestingPlaceCardComponent;
  let fixture: ComponentFixture<InterestingPlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingPlaceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingPlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
