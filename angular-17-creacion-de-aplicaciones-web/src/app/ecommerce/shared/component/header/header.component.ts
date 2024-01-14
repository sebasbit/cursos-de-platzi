import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  toggleSideMenu(): void {
    this.hideSideMenu.update((value) => !value);
  }
}
