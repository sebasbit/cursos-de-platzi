import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `<p class="text-sm">{{ message }}: {{ counter() }}</p>`,
  styles: ``,
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  counterRef!: number;

  constructor() {
    this.writeLog('CounterComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.writeLog('CounterComponent.ngOnChanges', changes);

    const duration = changes['duration'];
    if (
      duration !== undefined &&
      duration.currentValue !== duration.previousValue
    ) {
      this.writeLog('CounterComponent.ngOnChanges => change detected');
    }
  }

  ngOnInit(): void {
    this.writeLog(
      'CounterComponent.ngOnInit - duration ',
      this.duration,
      ' - message ',
      this.message
    );

    this.counterRef = window.setInterval(() => {
      console.log('Running interval');
      this.counter.update((value) => value + 1);
    }, this.duration);
  }

  ngAfterViewInit(): void {
    this.writeLog('CounterComponent.ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.writeLog('CounterComponent.ngOnDestroy');
    window.clearInterval(this.counterRef);
  }

  private writeLog(...messages: any[]): void {
    console.log(...messages);
    console.log('='.repeat(30));
  }
}
