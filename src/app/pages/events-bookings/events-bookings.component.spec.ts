import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBookingsComponent } from './events-bookings.component';

describe('EventsBookingsComponent', () => {
  let component: EventsBookingsComponent;
  let fixture: ComponentFixture<EventsBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsBookingsComponent]
    });
    fixture = TestBed.createComponent(EventsBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
