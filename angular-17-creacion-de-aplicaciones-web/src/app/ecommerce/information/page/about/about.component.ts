import { Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/component/counter/counter.component';
import { WaveAudioComponent } from '../../component/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directive/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(5000);
  message = signal('This site has been visited');

  changeDuration(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
