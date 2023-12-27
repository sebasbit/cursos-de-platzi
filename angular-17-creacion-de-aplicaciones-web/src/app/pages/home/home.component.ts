import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    { id: 1, title: 'Clean my room', completed: true },
    { id: 2, title: 'Do laundry', completed: false },
    { id: 3, title: 'Work out', completed: false },
  ]);

  addTask(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => [
      ...tasks,
      {
        id: this.tasks().length + 1,
        title: input.value,
        completed: false,
      },
    ]);
    input.value = '';
  }

  deleteTask(index: number): void {
    this.tasks.update((tasks) =>
      tasks.filter((_, position) => position !== index)
    );
  }
}
