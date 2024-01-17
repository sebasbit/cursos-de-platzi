import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnChanges {
  @Input({ required: true }) cart: Product[] = [];

  hideSideMenu = signal(true);
  totalPrice = signal(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cart'] !== undefined) {
      this.totalPrice.set(this.calcTotalPrice());
    }
  }

  toggleSideMenu(): void {
    this.hideSideMenu.update((value) => !value);
  }

  private calcTotalPrice(): number {
    return this.cart.reduce((acum, product) => acum + product.price, 0);
  }
}
