import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cart = signal<Product[]>([]);
  readonly totalPrice = computed(() => {
    const cart = this.cart();
    return cart.reduce((acum, product) => acum + product.price, 0);
  });

  addToCart(product: Product): void {
    this.cart.update((products) => [...products, product]);
  }
}
