import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/model/product.model';
import { ReversePipe } from '@shared/pipe/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipe/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
    TimeAgoPipe,
    RouterLinkWithHref,
  ],
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
