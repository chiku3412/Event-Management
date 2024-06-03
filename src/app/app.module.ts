import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsBookingsComponent } from './pages/events-bookings/events-bookings.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { NewEventComponent } from './pages/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsBookingsComponent,
    EventListComponent,
    MyBookingComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
