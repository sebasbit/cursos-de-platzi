import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../component/product/product.component';
import { Product } from '../../../shared/model/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
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
    ]);
  }

  handleAddToCart(event: string): void {
    alert(event);
  }
}
