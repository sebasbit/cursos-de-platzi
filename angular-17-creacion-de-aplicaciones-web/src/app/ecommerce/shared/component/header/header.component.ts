import { Component, Input, signal } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];

  hideSideMenu = signal(true);

  toggleSideMenu(): void {
    this.hideSideMenu.update((value) => !value);
  }
}
