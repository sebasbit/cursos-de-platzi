import { Component } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  todos: ToDo[] = [
    {
      id: 'ea247b32-7c41-40b0-b7eb-5a20bc51c28a',
      title: 'HU01: Create new Angular app',
    },
    {
      id: 'ea247b32-7c41-40b0-b7eb-5a20bc51c28a',
      title: 'HU02: Add the Angular CDK',
    },
    {
      id: 'ea247b32-7c41-40b0-b7eb-5a20bc51c28a',
      title: 'HU03: Create components for the UI',
    },
  ];

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
