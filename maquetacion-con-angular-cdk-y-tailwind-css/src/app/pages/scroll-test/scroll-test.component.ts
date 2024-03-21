import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-scroll-test',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll-test.component.html',
})
export class ScrollTestComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((products) => (this.products = products));
  }
}
