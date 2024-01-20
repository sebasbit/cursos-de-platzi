import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/model/product.model';
import { ReversePipe } from '@shared/pipe/reverse.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe, ReversePipe],
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
