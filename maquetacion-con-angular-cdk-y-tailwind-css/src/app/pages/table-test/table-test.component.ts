import { Component, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductDataSource } from './data-source';
import { ButtonComponent } from '../../components/button/button.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table-test',
  standalone: true,
  templateUrl: './table-test.component.html',
  imports: [
    NavbarComponent,
    ButtonComponent,
    CdkTableModule,
    ReactiveFormsModule,
  ],
})
export class TableTestComponent implements OnInit {
  dataSource = new ProductDataSource();
  columns: string[] = ['id', 'cover', 'title', 'price', 'actions'];
  filter = new FormControl('');
  total = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => {
        this.dataSource.init(products);
        this.total = this.dataSource.getTotal();
      });

    this.filter.valueChanges.pipe(debounceTime(300)).subscribe((input) => {
      if (input !== null) {
        this.dataSource.findProducts(input);
      }
    });
  }

  updateProduct(product: Product): void {
    this.dataSource.updateProduct(product.id, { price: product.price / 2 });
    this.total = this.dataSource.getTotal();
  }
}
