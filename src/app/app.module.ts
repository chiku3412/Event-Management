import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { register } from 'swiper/element/bundle';

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
import { AdminHeaderComponent } from './layouts/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './layouts/admin-layout/admin-footer/admin-footer.component';

// primeng library
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './layouts/admin-layout/contact-list/contact-list.component';

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
    AdminHeaderComponent,
    AdminFooterComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
