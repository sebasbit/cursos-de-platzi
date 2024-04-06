import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@trello-clone/modules/shared/components/button/button.component';

@Component({
  selector: 'trello-navbar',
  standalone: true,
  imports: [ButtonComponent, FaIconComponent, OverlayModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faXmark = faXmark;
  isOpen = false;
}
