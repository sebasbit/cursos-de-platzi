import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal(['Clean my room', 'Do laundry', 'Work out']);

  addTask(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) => [...tasks, input.value]);
    input.value = '';
  }

  deleteTask(index: number): void {
    this.tasks.update((tasks) =>
      tasks.filter((_, position) => position !== index)
    );
  }
}
