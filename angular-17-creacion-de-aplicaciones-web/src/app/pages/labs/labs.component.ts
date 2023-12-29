import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent implements OnDestroy {
  title = signal('labs');

  tasks = [
    'Create a new project with "ng new project name"',
    'Run the project with "ng serve"',
    'Open your web browser on http://localhost:4200/',
  ];

  scientist = signal({
    name: 'pepito',
    age: 23,
    avatar:
      'https://cataas.com/cat/says/Hello%20labs?fontColor=green&fontSize=20&type=square',
    canUpdateAge: false,
  });

  colorControl: FormControl<string> = new FormControl();

  private colorSubscription: Subscription;

  private word = 'very';

  constructor() {
    this.colorSubscription = this.colorControl.valueChanges.subscribe((color) =>
      console.log(color)
    );
  }

  ngOnDestroy(): void {
    this.colorSubscription.unsubscribe();
  }

  public handleClick(): void {
    alert('You clicked the button ✨');
  }

  public handleChange(event: Event): void {
    console.log(event);
  }

  public handleKeydown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  public handleKeydownWithShortcut(): void {
    alert('You pressed Shift + h ✨');
  }

  public handleKeyupWithSignal(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this.title.set(input.value);
  }

  public changeAge(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.scientist.update((scientist) => {
      return { ...scientist, age: parseInt(input.value) };
    });
  }

  public changeName(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.scientist.update((scientist) => {
      return { ...scientist, name: input.value };
    });
  }

  public getPrivateWord(): string {
    return this.word;
  }
}
