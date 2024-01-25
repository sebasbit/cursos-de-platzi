import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/model/product.model';
import { CartService } from '@shared/service/cart.service';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  @Input() id!: number;

  product = signal<Product | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (value) => {
          this.product.set(value);

          if (value.images.length > 0) {
            this.cover.set(value.images[0]);
          }
        },
        error: (error) => console.log(error),
      });
    }
  }

  changeCover(imageUrl: string): void {
    this.cover.set(imageUrl);
  }

  addToCart(): void {
    const product = this.product();
    if (product !== null) {
      this.cartService.addToCart(product);
    }
  }
}
