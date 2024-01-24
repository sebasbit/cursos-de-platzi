import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Product } from '@shared/model/product.model';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  @Input() id!: number;

  product = signal<Product | null>(null);

  private productService = inject(ProductService);

  ngOnInit(): void {
    if (this.id) {
      this.productService.getProduct(this.id).subscribe({
        next: (value) => this.product.set(value),
        error: (error) => console.log(error),
      });
    }
  }
}
