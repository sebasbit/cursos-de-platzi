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
import { ButtonComponent } from '../button/button.component';
import { Task } from '../../models/task.model';

type DialogInput = { task: Task };
type DialogOutput = string;

@Component({
  selector: 'app-task-dialog',
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
