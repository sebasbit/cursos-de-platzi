import { Routes } from '@angular/router';
import { HomeComponent } from './learning/pages/home/home.component';
import { LabsComponent } from './learning/pages/labs/labs.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NotFoundComponent } from './ecommerce/information/page/not-found/not-found.component';

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
    children: [
      {
        path: 'list',
        loadComponent: () => import('@product/page/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./ecommerce/information/page/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('@product/page/product-detail/product-detail.component'),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
