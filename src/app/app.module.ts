import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';

// Material library
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AboutComponent } from './layouts/user-layout/about/about.component';
import { ContactComponent } from './layouts/user-layout/contact/contact.component';
import { EventListComponent } from './layouts/user-layout/event-list/event-list.component';
import { FooterComponent } from './layouts/user-layout/footer/footer.component';
import { GalleryComponent } from './layouts/user-layout/gallery/gallery.component';
import { HeaderComponent } from './layouts/user-layout/header/header.component';
import { HomeBannerComponent } from './layouts/user-layout/home-banner/home-banner.component';
import { HomeComponent } from './layouts/user-layout/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainDashboardComponent } from './layouts/admin-layout/main-dashboard/main-dashboard.component';
import { AddEventComponent } from './layouts/admin-layout/add-event/add-event.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventListComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeBannerComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    MainDashboardComponent,
    AddEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
