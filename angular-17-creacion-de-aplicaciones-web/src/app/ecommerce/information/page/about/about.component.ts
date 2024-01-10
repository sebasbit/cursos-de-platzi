import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/component/counter/counter.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(0);
  message = signal('');

  changeDuration(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
