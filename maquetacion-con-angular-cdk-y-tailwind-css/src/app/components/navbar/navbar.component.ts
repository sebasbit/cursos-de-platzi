import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonComponent } from '../../components/button/button.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayModule, ButtonComponent, FaIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faXmark = faXmark;
  isOpen = false;
}
