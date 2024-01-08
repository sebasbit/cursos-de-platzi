import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) image: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;

  @Output() addToCart = new EventEmitter();

  emitAddToCart(): void {
    this.addToCart.emit(`Add product: ${this.title}`);
  }
}
