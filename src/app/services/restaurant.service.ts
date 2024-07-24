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

  getRestaurents(): Observable<Restaurant[]> {

    return this.http.get<Array<Restaurant>>(`${BASE_URL}restaurants`);
  }

  getRestaurentById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }

  addRestaurent(restaurant: Restaurant) {
    const body: any = structuredClone(restaurant);
    delete body.id;
    return this.http.post<Restaurant>(`${BASE_URL}restaurants`, body);
  }

  updateRestaurent(restaurant: Restaurant) {
    return this.http.patch<Restaurant>(`${BASE_URL}restaurants/${restaurant.id}`, restaurant);
  }

  deleteRestaurent(id: number) {
    return this.http.delete<Restaurant>(`${BASE_URL}restaurants/${id}`);
  }
}
