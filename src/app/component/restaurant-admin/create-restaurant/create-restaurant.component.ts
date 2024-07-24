import { Component } from '@angular/core';
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
export class CreateRestaurantComponent {

  isEditMode: boolean = false;
  restaurant: Restaurant = {
    id: 0, // Generate or assign ID as needed
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
    private readonly restaurentService: RestaurantService
  ) { }

  onInit() {
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
      const formData = form.value;
      const restaurant: Restaurant = {
        id: 0, // Generate or assign ID as needed
        name: formData.name,
        cuisineType: formData.cuisineType,
        description: formData.description,
        rating: formData.rating,
        isOpen: formData.isOpen || false,
        location: formData.location,
        contactNumber: formData.contactNumber
      };

      // Handle saving or submitting restaurant data (e.g., send to backend)
      console.log('Submitted Restaurant:', restaurant);
    } else {
      // Form not valid, handle error or show validation messages
      console.error('Form is invalid');
    }
  }

  saveRestaurant() {
    if (this.isEditMode) {
      // Update existing restaurant logic using this.restaurantId
    } else {
      // Create new restaurant logic
    }
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }

  close() {
    this.router.navigate(['restaurant']);
  }
}
