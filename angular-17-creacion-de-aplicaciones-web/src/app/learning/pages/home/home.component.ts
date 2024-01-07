
import {
  Component,
  Injector,
  OnInit,
  computed,
  effect,
  signal,
} from '@angular/core';
import { Task, TaskFilter } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  tasks = signal<Task[]>([
    { id: 1, title: 'Clean my room', completed: true, editing: false },
    { id: 2, title: 'Do laundry', completed: false, editing: false },
    { id: 3, title: 'Work out', completed: false, editing: false },
  ]);

  taskControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  filter = signal<TaskFilter>('ALL');

  filteredTasks = computed<Task[]>(() => {
    switch (this.filter()) {
      case 'PENDING':
        return this.tasks().filter((task) => !task.completed);
      case 'COMPLETED':
        return this.tasks().filter((task) => task.completed);
      case 'ALL':
      default:
        return this.tasks();
    }
  });

  constructor(private injector: Injector) {}

  ngOnInit(): void {
    const storage = localStorage.getItem('tasks');
    if (storage !== null) {
      this.tasks.set(JSON.parse(storage));
    }
    this.trackTaskStorage();
  }

  private trackTaskStorage(): void {
    effect(() => localStorage.setItem('tasks', JSON.stringify(this.tasks())), {
      injector: this.injector,
    });
  }

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

  deleteTask(id: number): void {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  markAsCompleted(id: number): void {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id !== id ? task : { ...task, completed: !task.completed }
      )
    );
  }

  changeTaskTitle(id: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id !== id ? task : { ...task, title: input.value, editing: false }
      )
    );
  }

  switchToEditMode(id: number): void {
    if (this.tasks().find((task) => task.id === id)?.completed) {
      return;
    }

    this.tasks.update((tasks) =>
      tasks.map((task) => {
        return { ...task, editing: task.id === id };
      })
    );
  }

  changeFilter(filter: TaskFilter): void {
    this.filter.set(filter);
  }
}
