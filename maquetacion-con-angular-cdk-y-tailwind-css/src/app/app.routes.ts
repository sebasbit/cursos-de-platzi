import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { ScrollTestComponent } from './pages/scroll-test/scroll-test.component';
import { TableTestComponent } from './pages/table-test/table-test.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'scroll-test',
    component: ScrollTestComponent,
  },
  {
    path: 'table-test',
    component: TableTestComponent,
  },
];
