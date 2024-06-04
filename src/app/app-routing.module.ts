import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { EventListComponent } from './layouts/user-layout/event-list/event-list.component';
import { HomeComponent } from './layouts/user-layout/home/home.component';
import { AboutComponent } from './layouts/user-layout/about/about.component';
import { ContactComponent } from './layouts/user-layout/contact/contact.component';
import { GalleryComponent } from './layouts/user-layout/gallery/gallery.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddEventComponent } from './admin-dashboard/add-event/add-event.component';
import { MainDashboardComponent } from './admin-dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'event-list', component: EventListComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: MainDashboardComponent },
      { path: 'dashboard', component: MainDashboardComponent },
      { path: 'add-event', component: AddEventComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
