import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type BtnType = 'button' | 'reset' | 'submit';
type Color = 'primary' | 'light' | 'default';

@Component({
  selector: 'trello-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() btnType: BtnType = 'button';
  @Input() color: Color = 'default';

  get colorClasses(): string {
    const classList: { [color in Color]: string } = {
      primary:
        'text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900',
      light: 'text-white bg-light-700 hover:bg-light-600 active:bg-light-800',
      default:
        'bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-400',
    };

    return classList[this.color] ?? classList['default'];
  }
}
