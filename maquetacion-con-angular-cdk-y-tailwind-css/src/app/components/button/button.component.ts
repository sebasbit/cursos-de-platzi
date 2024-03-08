import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [type]="btnType"
      class="text-white w-full font-medium rounded text-sm px-5 py-2 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() btnType: 'button' | 'reset' | 'submit' = 'button';
}
