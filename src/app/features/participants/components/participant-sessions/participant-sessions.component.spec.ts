import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSessionsComponent } from './participant-sessions.component';

describe('ParticipantSessionsComponent', () => {
  let component: ParticipantSessionsComponent;
  let fixture: ComponentFixture<ParticipantSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
