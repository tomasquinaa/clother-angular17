import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  products = [];
  constructor() {}

  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:3000/products');
  }
}
