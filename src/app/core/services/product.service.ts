import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then( data => data.products);
  }
}
