import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
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

  constructor(public dialogRef: DialogRef<string>) {}
}
