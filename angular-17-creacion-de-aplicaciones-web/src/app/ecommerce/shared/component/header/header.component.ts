import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  private cartService = inject(CartService);

  hideSideMenu = signal(true);
  cart = this.cartService.cart;
  totalPrice = this.cartService.totalPrice;

  // cart: WritableSignal<Product[]>;
  // totalPrice: Signal<number>;

  // constructor(private cartService: CartService) {
  //   this.cart = this.cartService.cart;
  //   this.totalPrice = this.cartService.totalPrice;
  // }

  toggleSideMenu(): void {
    this.hideSideMenu.update((value) => !value);
  }
}
