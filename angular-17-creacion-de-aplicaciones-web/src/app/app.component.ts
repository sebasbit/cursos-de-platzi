import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'world';
  tasks = [
    'Run "ng new app-name"',
    'Edit app.component.html to change the page content',
    'Run "ng serve"',
    'Open in your browser http://localhost:4200',
  ];
}
