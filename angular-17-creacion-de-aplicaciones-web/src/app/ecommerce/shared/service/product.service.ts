import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_BASE_URL = 'https://api.escuelajs.co/api';

  private httpClient = inject(HttpClient);

  getProducts(categoryId?: string): Observable<Product[]> {
    // const url = new URL(`${this.API_BASE_URL}/v1/products`);

    // if (categoryId !== undefined) {
    //   url.searchParams.set('categoryId', categoryId);
    // }

    // return this.httpClient.get<Product[]>(url.toString());

    const options = categoryId
      ? { params: new HttpParams().set('categoryId', categoryId) }
      : {};

    return this.httpClient.get<Product[]>(
      `${this.API_BASE_URL}/v1/products`,
      options
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `${this.API_BASE_URL}/v1/products/${id}`
    );
  }
}
