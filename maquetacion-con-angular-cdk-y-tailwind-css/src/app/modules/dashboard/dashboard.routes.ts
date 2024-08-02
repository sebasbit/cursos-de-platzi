import { Routes } from '@angular/router';
import { BoardsComponent } from '@trello-clone/modules/dashboard/components/boards-page/boards-page.component';
import { BoardComponent } from '@trello-clone/modules/dashboard/components/board-page/board-page.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
];
