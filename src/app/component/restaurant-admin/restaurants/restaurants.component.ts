import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { Restaurant } from '../../../models/restaurant';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

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
export class RestaurantsComponent implements OnInit {
  //Data source to be bind to grid
  dataSource: Restaurant[] = [];

  //Column list for the grid where field is object property name, and HeaderName is Header to be displayed for the columns of grid
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
    private readonly restaurentService: RestaurantService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getRestaurents();
  }

  /**
   * Get the list of the restaurants
   */
  getRestaurents(): void {
    this.restaurentService.getRestaurents().subscribe(res => {
      this.dataSource = res;
    });
  }

  /**
   * prepare a list where only field name should be there, required to render a grid
   * @returns A list of fields i.e string[]
   */
  getDisplayedColumns(): string[] {
    return this.displayedColumns.map(ele => ele.field);
  }

  /**
   * Navigate to create a new restaurant
   */
  createNewRestaurant(): void {
    this.router.navigate(['/create-restaurant']);
  }

  /**
   * Navigate to cupdate restaurant
   */
  edit(id: number): void {
    this.router.navigate(['/edit-restaurant', id]);
  }

  /**
   * Delete a restaurant
   * @param id restaurant id
   */
  delete(id: number): void {
    this.restaurentService.deleteRestaurent(id).subscribe({
      next: () => {
        this._snackBar.open('Restaurant deleted succesfully!', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.getRestaurents();
      },
      error: () => { 
        this._snackBar.open('Something went wrong!. Unable to delete restaurant, please try again later.', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }
}
