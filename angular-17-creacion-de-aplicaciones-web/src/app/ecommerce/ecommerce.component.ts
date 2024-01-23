import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/component/header/header.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="container mx-auto">
      <app-header />
      <router-outlet />
    </div>
  `,
})
export class EcommerceComponent {}
