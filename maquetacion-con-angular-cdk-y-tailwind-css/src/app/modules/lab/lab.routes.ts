import { Routes } from '@angular/router';
import { ScrollTestComponent } from '@trello-clone/modules/lab/components/scroll-test-page/scroll-test-page.component';
import { TableTestComponent } from '@trello-clone/modules/lab/components/table-test-page/table-test-page.component';

export const LAB_ROUTES: Routes = [
  {
    path: 'scroll-test',
    component: ScrollTestComponent,
  },
  {
    path: 'table-test',
    component: TableTestComponent,
  },
];
