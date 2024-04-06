import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavbarComponent } from '@trello-clone/modules/shared/components/navbar/navbar.component';
import { Product } from '@trello-clone/modules/core/models/product.model';

@Component({
  selector: 'lab-scroll-test-page',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll-test-page.component.html',
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
