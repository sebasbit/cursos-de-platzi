import { Routes } from '@angular/router';
import { HomeComponent } from './learning/pages/home/home.component';
import { LabsComponent } from './learning/pages/labs/labs.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ListComponent } from './ecommerce/product/page/list/list.component';
import { AboutComponent } from './ecommerce/information/page/about/about.component';

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
        component: ListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
];
