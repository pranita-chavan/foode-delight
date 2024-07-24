import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../models/restaurant';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent implements OnInit{
  dataSource: Restaurant[] = [];
  displayedColumns1: string[] = ['Id', 'Name', 'Cuisine Type', 'Description', 'Rating', 'IsOpen', 'Location', 'Contact Number'];
  displayedColumns: { field: string, headerName: string }[] = [
    { field: 'id', headerName: 'Id' },
    { field: 'name', headerName: 'Name' },
    { field: 'cuisineType', headerName: 'Cuisine Type' },
    { field: 'description', headerName: 'Description' },
    { field: 'rating', headerName: 'Rating' },
    { field: 'isOpen', headerName: 'IsOpen' },
    { field: 'location', headerName: 'Location' },
    { field: 'contactNumber', headerName: 'Contact Number' },
    { field: 'actions', headerName: 'Actions' }
  ];

  constructor(private readonly router: Router,
    private readonly restaurentService: RestaurantService
  ){}

  ngOnInit() {
    this.restaurentService.getRestaurents().subscribe(res => {
      this.dataSource = res;
    })
  }

  getDisplayedColumns() {
    return this.displayedColumns.map(ele => ele.field);
  }

  createNewRestaurant() {
    this.router.navigate(['/create-restaurant']);
  }

  edit() {
    this.router.navigate(['/create-restaurant']);
  }

  delete() {
    
  }
}
