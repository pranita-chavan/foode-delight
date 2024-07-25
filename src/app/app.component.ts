import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Static Username for header toolbar
  userName = 'Pranita Chavan';

  //Navigation menu's for sidebar
  navItems = [
    { label: 'Dashboard', icon: 'home', route: '' },
    { label: 'Restaurant', icon: 'restaurant_menu', route: 'restaurant' },
    { label: 'Customers', icon: 'people_outline', route: '' },
    { label: 'Complaints', icon: 'move_to_inbox', route: '' }
  ];

  //By default sidenav is open or not
  sidenavOpened = false;

  constructor(private readonly router: Router){}

  /**
   * Toggle the sidenav on click of menu icon, by default it is false
   */
  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  /**
   * Navigate to the Menu from the sidebar
   * @param item : Side nav menu
   */
  navigateRoute(item: { label: string, icon: string, route: string }): void {
    this.router.navigate([item.route]);
  }
}
