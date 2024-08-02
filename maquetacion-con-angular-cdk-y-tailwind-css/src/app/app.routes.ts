import { Routes } from '@angular/router';
import { AUTH_ROUTES } from '@trello-clone/modules/auth/auth.routes';
import { DASHBOARD_ROUTES } from '@trello-clone/modules/dashboard/dashboard.routes';
import { LAB_ROUTES } from '@trello-clone/modules/lab/lab.routes';

export const routes: Routes = [
  {
    path: 'auth',
    children: AUTH_ROUTES,
  },
  {
    path: 'dashboard',
    children: DASHBOARD_ROUTES,
  },
  {
    path: 'lab',
    children: LAB_ROUTES,
  },
];
