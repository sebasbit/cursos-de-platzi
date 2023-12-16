import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'labs';
  tasks = [
    'Create a new project with "ng new project name"',
    'Run the project with "ng serve"',
    'Open your web browser on http://localhost:4200/',
  ];
  private word = 'very';

  public getPrivateWord(): string {
    return this.word;
  }
}
