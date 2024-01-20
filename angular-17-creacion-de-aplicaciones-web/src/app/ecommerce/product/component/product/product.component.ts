import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/model/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styles: ``,
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCart = new EventEmitter<Product>();

  emitAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
