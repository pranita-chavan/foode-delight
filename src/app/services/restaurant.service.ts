import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Observable, of } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Get list of restaurants
   * @returns returns a observable of restaurants list with http resposne
   */
  getRestaurents(): Observable<Restaurant[]> {
    return this.http.get<Array<Restaurant>>(`${BASE_URL}restaurants`);
  }

  /**
   * Get restaurant by id
   * @param id Restaurant Id 
   * @returns returns a observable of restaurant with http resposne
   */
  getRestaurentById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }

  /**
   * Add new restaurant
   * @param restaurant Restaurant object to add in the data
   * @returns An observable of Http response
   */
  addRestaurent(restaurant: Restaurant): Observable<Restaurant> {
    const body: any = structuredClone(restaurant);
    delete body.id; //Delete id if anything is there so JSOn server will automatically create a id
    return this.http.post<Restaurant>(`${BASE_URL}restaurants`, body);
  }

  /**
   * Update a restaurant
   * @param restaurant Restaurant object which needs to update
   * @returns An observable of Http response
   */
  updateRestaurent(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.patch<Restaurant>(`${BASE_URL}restaurants/${restaurant.id}`, restaurant);
  }

  /**
   * Delete a restaurant
   * @param id Restaurent id which needs to delete
   * @returns An observable of Http response
   */
  deleteRestaurent(id: number): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }
}
