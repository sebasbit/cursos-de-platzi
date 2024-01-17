import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../component/product/product.component';
import { Product } from '../../../shared/model/product.model';
import { HeaderComponent } from '../../../shared/component/header/header.component';
import { CartService } from '../../../shared/service/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent {
  private cartService = inject(CartService);

  products = signal<Product[]>([]);

  constructor() {
    this.products.set([
      {
        id: 1,
        title: 'Product example #1',
        price: 1000,
        image: 'https://cataas.com/cat?width=640&height=640&r=1',
        createdAt: new Date(),
      },
      {
        id: 2,
        title: 'Product example #2',
        price: 2000,
        image: 'https://cataas.com/cat?width=640&height=640&r=2',
        createdAt: new Date(),
      },
      {
        id: 3,
        title: 'Product example #3',
        price: 3000,
        image: 'https://cataas.com/cat?width=640&height=640&r=3',
        createdAt: new Date(),
      },
      {
        id: 4,
        title: 'Product example #4',
        price: 4000,
        image: 'https://cataas.com/cat?width=640&height=640&r=4',
        createdAt: new Date(),
      },
      {
        id: 5,
        title: 'Product example #5',
        price: 5000,
        image: 'https://cataas.com/cat?width=640&height=640&r=5',
        createdAt: new Date(),
      },
      {
        id: 6,
        title: 'Product example #6',
        price: 6000,
        image: 'https://cataas.com/cat?width=640&height=640&r=6',
        createdAt: new Date(),
      },
    ]);
  }

  handleAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
