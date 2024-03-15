import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  todo: Task[] = [
    {
      id: '916ba3f7-217d-4038-8c9d-6f3c99575157',
      title: 'HU03: Create components for the UI',
    },
    {
      id: '5be18df5-f703-4659-b589-157ed4a7d065',
      title: 'HU04: Create the Log in page',
    },
  ];
  doing: Task[] = [
    {
      id: 'cd5a8af6-39d8-4fd0-a7de-3916c1afb7cf',
      title: 'HU02: Add the Angular CDK',
    },
  ];
  done: Task[] = [
    {
      id: 'ea247b32-7c41-40b0-b7eb-5a20bc51c28a',
      title: 'HU02: Create new Angular app',
    },
  ];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
