import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from '@product/component/product/product.component';
import { Category } from '@shared/model/category.model';
import { Product } from '@shared/model/product.model';
import { CartService } from '@shared/service/cart.service';
import { CategoryService } from '@shared/service/category.service';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  private loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (value) => this.products.set(value),
      error: (error) => console.log(error),
    });
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (value) => this.categories.set(value),
      error: (error) => console.log(error),
    });
  }

  handleAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
