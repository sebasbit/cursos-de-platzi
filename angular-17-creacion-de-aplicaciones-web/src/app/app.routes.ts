import { Routes } from '@angular/router';
import { HomeComponent } from './learning/pages/home/home.component';
import { LabsComponent } from './learning/pages/labs/labs.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const routes: Routes = [
  {
    path: 'learning',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'labs',
        component: LabsComponent,
      },
    ],
  },
  {
    path: 'ecommerce',
    component: EcommerceComponent,
  },
];
