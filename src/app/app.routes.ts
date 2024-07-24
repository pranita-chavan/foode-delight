import { Routes } from '@angular/router';
import { CreateRestaurantComponent, RestaurantsComponent } from './component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'restaurant',
        pathMatch: 'full'
    },
    { path: 'restaurant', component: RestaurantsComponent },
    { path: 'create-restaurant', component: CreateRestaurantComponent },
    { path: 'edit-restaurant/:id', component: CreateRestaurantComponent },
    {
        path: '**',
        redirectTo: 'restaurant',
    },
];
