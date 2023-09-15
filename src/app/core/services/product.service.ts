import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    @Inject(HttpClient) private http:HttpClient
  ){}

  getProducts(){
    return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then( data => data.products);
  }
}
