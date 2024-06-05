import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  hideHeaderFooter: boolean = false;

  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide header and footer on login pages
        this.hideHeaderFooter = event.url.includes('/login');
      }
    });
  }

  ngOnInit(): void {
    
  }
}
