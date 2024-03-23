import { Component, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-table-test',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule],
  templateUrl: './table-test.component.html',
})
export class TableTestComponent implements OnInit {
  products: Product[] = [];
  columns: string[] = ['id', 'cover', 'title', 'price'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => (this.products = products));
  }
}
