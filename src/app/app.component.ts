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
  userName = 'Pranita Chavan';

  navItems = [
    { label: 'Dashboard', icon: 'home', route: '' },
    { label: 'Restaurant', icon: 'restaurant_menu', route: 'restaurant' },
    { label: 'Customers', icon: 'people_outline', route: '' },
    { label: 'Complaints', icon: 'move_to_inbox', route: '' }
  ];

  sidenavOpened = false;

  constructor(private readonly router: Router){}

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  navigateRoute(item: { label: string, icon: string, route: string }) {
    this.router.navigate([item.route])
  }
}
