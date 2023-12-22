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
  tasks = signal([
    'Create a new project with "ng new project name"',
    'Run the project with "ng serve"',
    'Open your web browser on http://localhost:4200/',
  ]);
}
