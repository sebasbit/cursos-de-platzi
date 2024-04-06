import { Component } from '@angular/core';
import { ButtonComponent } from '@trello-clone/modules/shared/components/button/button.component';

@Component({
  selector: 'trello-login-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {}
