import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type BtnType = 'button' | 'reset' | 'submit';
type Color = 'primary' | 'success' | 'default';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [type]="btnType"
      class="text-white w-full font-medium rounded text-sm px-5 py-2 focus:ring-4"
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
      primary: 'bg-primary-700 hover:bg-primary-800 focus:ring-primary-300',
      success: 'bg-success-700 hover:bg-success-800 focus:ring-success-300',
      default: 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-300',
    };

    return classList[this.color] ?? classList['default'];
  }
}
