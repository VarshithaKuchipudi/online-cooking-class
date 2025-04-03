import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header', // This must be 'app-header'
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  })
export class HeaderComponent {
  constructor(private router: Router) { }

  // Optional: Method to check if a route is active for navigation highlighting
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}