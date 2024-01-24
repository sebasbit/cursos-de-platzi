import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_BASE_URL = 'https://api.escuelajs.co/api';

  private httpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.API_BASE_URL}/v1/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `${this.API_BASE_URL}/v1/products/${id}`
    );
  }
}
