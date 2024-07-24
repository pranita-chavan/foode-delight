import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Restaurant } from '../../../models/restaurant';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../../services/restaurant.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.scss'
})
export class CreateRestaurantComponent implements OnInit {

  isEditMode: boolean = false;
  restaurant: Restaurant = {
    id: '', // Generate or assign ID as needed
    name: '',
    cuisineType: '',
    description: '',
    rating: 0,
    isOpen: false,
    location: '',
    contactNumber: ''
  };
  constructor(private readonly router: Router,
    private route: ActivatedRoute,
    private readonly restaurentService: RestaurantService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.getRestaurantById(params['id']);
      }
    });
  }


  getRestaurantById(id: number) {
    this.restaurentService.getRestaurentById(id).subscribe(res => {
      if (res)
        this.restaurant = res;
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.saveOrUpdateRestaurant();
    } else {
      // Form not valid, handle error or show validation messages
      this._snackBar.open('Please  enter correct details', 'close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }

  saveOrUpdateRestaurant() {
    if (this.isEditMode) {
      this.restaurentService.updateRestaurent(this.restaurant).subscribe(res => {
        this._snackBar.open('Restaurant updated succesfully!', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.close();
      });
    } else {
      this.restaurentService.addRestaurent(this.restaurant).subscribe(res => {
        this._snackBar.open('Restaurant added succesfully!', 'close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.close();
      });
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }

  close() {
    this.router.navigate(['restaurant']);
  }
}
