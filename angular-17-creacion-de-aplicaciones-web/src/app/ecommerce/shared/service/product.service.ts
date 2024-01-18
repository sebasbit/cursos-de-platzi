import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
  }
}
