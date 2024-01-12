import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `<p>counter works!</p>`,
  styles: ``,
})
export class CounterComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

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
  }

  ngAfterViewInit(): void {
    this.writeLog('CounterComponent.ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.writeLog('CounterComponent.ngOnDestroy');
  }

  private writeLog(...messages: any[]): void {
    console.log(...messages);
    console.log('='.repeat(30));
  }
}
