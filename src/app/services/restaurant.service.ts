import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant, RESTAURANTS } from '../models/restaurant';
import { Observable, of } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private readonly http: HttpClient) { }

  getRestaurents(): Observable<Restaurant[]> {

    return this.http.get<Array<Restaurant>>(`${BASE_URL}restaurants`);
    // return of(RESTAURANTS);
  }

  getRestaurentById(id: number): Observable<Restaurant> {
    // let rest = RESTAURANTS.find(ele => ele.id === id);
    // return of(rest ?? undefined);
    return this.http.get<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }

  addRestaurent(restaurant: Restaurant) {
    return this.http.post<Restaurant>(`${BASE_URL}restaurants`, restaurant);
    // return this.http.get<Array<Restaurant>>('addRestaurants');
  }

  modifyRestaurent(restaurant: Restaurant) {
    return this.http.patch<Restaurant>(`${BASE_URL}restaurants`, restaurant);
  }

  deleteRestaurent(id: number) {
    return this.http.delete<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }
}
