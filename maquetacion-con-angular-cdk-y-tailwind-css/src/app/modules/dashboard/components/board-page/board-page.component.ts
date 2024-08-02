import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { NavbarComponent } from '@trello-clone/modules/shared/components/navbar/navbar.component';
import { ButtonComponent } from '@trello-clone/modules/shared/components/button/button.component';
import { Column } from '@trello-clone/modules/core/models/column.model';
import { Task } from '@trello-clone/modules/core/models/task.model';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'trello-board-page',
  standalone: true,
  imports: [
    NavbarComponent,
    ButtonComponent,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    FormsModule,
  ],
  templateUrl: './board-page.component.html',
  styleUrl: './board-page.component.scss',
})
export class BoardComponent {
  newColumnTitle: string = '';

  columns: Column[] = [
    {
      title: 'To Do',
      tasks: [
        {
          id: '916ba3f7-217d-4038-8c9d-6f3c99575157',
          title: 'HU03: Create components for the UI',
        },
        {
          id: '5be18df5-f703-4659-b589-157ed4a7d065',
          title: 'HU04: Create the Log in page',
        },
      ],
    },
    {
      title: 'Doing',
      tasks: [
        {
          id: 'cd5a8af6-39d8-4fd0-a7de-3916c1afb7cf',
          title: 'HU02: Add the Angular CDK',
        },
      ],
    },
    {
      title: 'Done',
      tasks: [
        {
          id: 'ea247b32-7c41-40b0-b7eb-5a20bc51c28a',
          title: 'HU01: Create new Angular app',
        },
      ],
    },
  ];

  constructor(public dialog: Dialog) {}

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

  addNewColumn(): void {
    if (this.newColumnTitle.trim() === '') {
      return;
    }

    this.columns.push({
      title: this.newColumnTitle,
      tasks: [],
    });

    this.newColumnTitle = '';
  }

  openTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      minWidth: '250px',
      maxWidth: '50%',
      data: { task },
    });

    dialogRef.closed.subscribe((result) => {
      console.log(`Dialog opened for task ${result}`);
    });
  }
}
