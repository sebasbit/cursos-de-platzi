import { DataSource } from '@angular/cdk/collections';
import { Product } from '@trello-clone/modules/core/models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class ProductDataSource extends DataSource<Product> {
  private products: Product[] = [];
  private productsObservable = new BehaviorSubject<Product[]>([]);

  connect(): Observable<readonly Product[]> {
    return this.productsObservable;
  }

  disconnect(): void {}

  init(producs: Product[]): void {
    this.products = producs;
    this.productsObservable.next(producs);
  }

  getTotal(): number {
    return this.productsObservable
      .getValue()
      .reduce((accum, product) => accum + product.price, 0);
  }

  updateProduct(
    productId: Product['id'],
    productChanges: Partial<Product>
  ): void {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...productChanges };
      this.productsObservable.next(this.products);
    }
  }

  findProducts(query: string): void {
    if (query.trim() === '') {
      this.productsObservable.next(this.products);
      return;
    }

    const filtered = this.products.filter((product) => {
      const fullMatch = `${product.id} ${product.title} ${product.price}`;
      return fullMatch.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
    this.productsObservable.next(filtered);
  }
}
