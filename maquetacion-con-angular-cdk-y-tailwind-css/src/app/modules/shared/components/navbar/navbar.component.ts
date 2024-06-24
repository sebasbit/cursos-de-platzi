import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@trello-clone/modules/shared/components/button/button.component';
import {
  DropdownButtonDirective,
  DropdownComponent,
} from '@trello-clone/modules/shared/components/dropdown/dropdown.component';

@Component({
  selector: 'trello-navbar',
  standalone: true,
  imports: [
    ButtonComponent,
    FaIconComponent,
    DropdownButtonDirective,
    DropdownComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faXmark = faXmark;
  isOpen = false;
}
