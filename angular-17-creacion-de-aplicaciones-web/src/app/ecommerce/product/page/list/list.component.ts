import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from '@product/component/product/product.component';
import { Product } from '@shared/model/product.model';
import { CartService } from '@shared/service/cart.service';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent implements OnInit {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (value) => this.products.set(value),
      error: (error) => console.log(error),
    });
  }

  handleAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
