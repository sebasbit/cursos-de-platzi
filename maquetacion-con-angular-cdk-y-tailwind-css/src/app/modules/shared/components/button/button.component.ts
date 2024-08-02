import { Component, HostBinding, Input } from '@angular/core';

type Color = 'primary' | 'light' | 'default';

@Component({
  selector: 'button[trelloButton], a[trelloButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() color: Color = 'default';

  @HostBinding('class')
  get styles(): string {
    const baseStyle = 'w-full font-medium rounded text-sm px-5 py-2';
    const colorStyle: { [color in Color]: string } = {
      primary:
        'text-white bg-primary-800 hover:bg-primary-700 active:bg-primary-900',
      light: 'text-white bg-light-700 hover:bg-light-600 active:bg-light-800',
      default:
        'bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-400',
    };

    return baseStyle + ' ' + (colorStyle[this.color] ?? colorStyle['default']);
  }
}
