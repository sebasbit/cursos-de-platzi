import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll-test',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <div class="flex flex-col h-screen">
      <app-navbar />
      <div class="w-full grow bg-light-700 p-6">
        <div class="flex gap-4">
          <div class="w-1/2">
            <h2 class="text-white mb-2">Regular scroll</h2>
            <div class="h-96 w-full border overflow-y-scroll bg-white">
              @for (product of products; track product.id) {
              <div class="flex items-center space-x-4">
                <img
                  class="w-10 h-10 rounded-full"
                  [src]="product.images[0]"
                  [alt]="product.title"
                />
                <div class="space-y-1 font-medium">
                  <div>{{ product.title }}</div>
                  <div class="text-sm text-gray-500">\${{ product.price }}</div>
                </div>
              </div>
              }
            </div>
          </div>
          <div class="w-1/2">
            <h2 class="text-white mb-2">Virtual scroll</h2>
            <div class="h-96 w-full border overflow-y-scroll bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ScrollTestComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => (this.products = products));
  }
}
