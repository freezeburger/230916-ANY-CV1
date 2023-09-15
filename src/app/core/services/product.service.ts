import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { MProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor(
    // @Inject(HttpClient) private http:HttpClient
    // private http:HttpClient
  ){}

  getProducts(){
    /*
    return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then( data => data.products);
    */

    return this.http.get<{products:MProduct[]}>('https://dummyjson.com/products')
                    .pipe( map(data => data.products ) )
  }
}
