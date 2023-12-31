import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: 1, title: 'Clean my room', completed: true, editing: false },
    { id: 2, title: 'Do laundry', completed: false, editing: false },
    { id: 3, title: 'Work out', completed: false, editing: false },
  ]);

  taskControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  addTask(): void {
    let value = '';
    if (
      !this.taskControl.valid ||
      '' === (value = this.taskControl.value.trim())
    ) {
      return;
    }

    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: Date.now(),
        title: value,
        completed: false,
        editing: false,
      },
    ]);

    this.taskControl.setValue('');
  }

  deleteTask(index: number): void {
    this.tasks.update((tasks) =>
      tasks.filter((_, position) => position !== index)
    );
  }

  maskAsCompleted(index: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task, position) =>
        position !== index ? task : { ...task, completed: !task.completed }
      )
    );
  }

  changeTaskTitle(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) =>
      tasks.map((task, position) =>
        position !== index
          ? task
          : { ...task, title: input.value, editing: false }
      )
    );
  }

  switchToEditMode(index: number): void {
    if (this.tasks()[index].completed) {
      return;
    }

    this.tasks.update((tasks) =>
      tasks.map((task, position) => {
        return { ...task, editing: index === position };
      })
    );
  }
}
