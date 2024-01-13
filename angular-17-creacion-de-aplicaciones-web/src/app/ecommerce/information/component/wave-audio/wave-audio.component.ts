import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  signal,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  template: `
    <div #waveaudio></div>
    <button (click)="playOrPause()">
      @if (playing()) { Pause } @else { Play }
    </button>
  `,
  styles: ``,
})
export class WaveAudioComponent implements AfterViewInit {
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('waveaudio') container!: ElementRef;

  playing = signal(false);
  private waveSurfer!: WaveSurfer;

  ngAfterViewInit(): void {
    this.waveSurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });
    this.waveSurfer.on('play', () => this.playing.set(true));
    this.waveSurfer.on('pause', () => this.playing.set(false));
  }

  playOrPause() {
    this.waveSurfer.playPause();
  }
}
