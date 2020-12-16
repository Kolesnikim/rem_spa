import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingPlacesComponent } from './interesting-places.component';

describe('InterestingPlacesComponent', () => {
  let component: InterestingPlacesComponent;
  let fixture: ComponentFixture<InterestingPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
