import { DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class ProductDataSource extends DataSource<Product> {
  private products = new BehaviorSubject<Product[]>([]);

  connect(): Observable<readonly Product[]> {
    return this.products;
  }

  disconnect(): void {}

  init(producs: Product[]): void {
    this.products.next(producs);
  }

  getTotal(): number {
    return this.products
      .getValue()
      .reduce((accum, product) => accum + product.price, 0);
  }

  updateProduct(
    productId: Product['id'],
    productChanges: Partial<Product>
  ): void {
    const products = this.products.getValue();
    const index = products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      products[index] = { ...products[index], ...productChanges };
      this.products.next(products);
    }
  }
}
