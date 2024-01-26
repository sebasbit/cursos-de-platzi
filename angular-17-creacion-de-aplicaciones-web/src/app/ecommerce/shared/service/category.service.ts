import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/model/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly API_BASE_URL = 'https://api.escuelajs.co/api';

  private httpClient = inject(HttpClient);

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      `${this.API_BASE_URL}/v1/categories`
    );
  }
}
