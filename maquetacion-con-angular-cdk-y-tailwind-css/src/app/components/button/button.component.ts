import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type BtnType = 'button' | 'reset' | 'submit';
type Color = 'primary' | 'light' | 'default';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [type]="btnType"
      class="w-full font-medium rounded text-sm px-5 py-2"
      [ngClass]="colorClasses"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Input() btnType: BtnType = 'button';
  @Input() color: Color = 'default';

  get colorClasses(): string {
    const classList: { [color in Color]: string } = {
      primary:
        'text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900',
      light: 'text-white bg-light-600 hover:bg-light-500 active:bg-light-700',
      default:
        'bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-400',
    };

    return classList[this.color] ?? classList['default'];
  }
}
