import { Component } from '@angular/core';
import { ProductComponent } from '../../component/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  handleAddToCart(event: string): void {
    alert(event);
  }
}
