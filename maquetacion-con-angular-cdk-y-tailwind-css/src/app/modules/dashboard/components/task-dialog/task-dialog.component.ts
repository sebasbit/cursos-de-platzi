import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from '@trello-clone/modules/core/models/task.model';
import { ButtonComponent } from '@trello-clone/modules/shared/components/button/button.component';

type DialogInput = { task: Task };
type DialogOutput = string;

@Component({
  selector: 'trello-task-dialog',
  standalone: true,
  imports: [ButtonComponent, FaIconComponent],
  templateUrl: './task-dialog.component.html',
})
export class TaskDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  task: Task;

  constructor(
    public dialogRef: DialogRef<DialogOutput>,
    @Inject(DIALOG_DATA) public data: DialogInput
  ) {
    this.task = this.data.task;
  }
}
