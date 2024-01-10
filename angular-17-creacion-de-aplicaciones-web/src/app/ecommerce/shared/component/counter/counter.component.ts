import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `<p>counter works!</p>`,
  styles: ``,
})
export class CounterComponent implements OnChanges {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    this.writeLog('CounterComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.writeLog('CounterComponent.ngOnChanges', changes);
  }

  private writeLog(...messages: any[]): void {
    console.log(...messages);
    console.log('='.repeat(30));
  }
}
