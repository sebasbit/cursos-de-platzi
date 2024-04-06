import { Routes } from '@angular/router';
import { LoginPageComponent } from '@trello-clone/modules/auth/components/login-page/login-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
