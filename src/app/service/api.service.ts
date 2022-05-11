import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
  }
}
// https://run.mocky.io/v3/73602cfc-38e0-487a-baed-ed79f08b1ea0