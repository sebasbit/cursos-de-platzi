import { CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { Component, Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'button[trelloDropdownButtonFor], a[trelloDropdownButtonFor]',
  standalone: true,
})
export class DropdownButtonDirective extends CdkOverlayOrigin {
  @Input({ required: true, alias: 'trelloDropdownButtonFor' })
  get dropdown(): DropdownComponent {
    return this._dropdown;
  }
  set dropdown(dropdown: DropdownComponent) {
    this._dropdown = dropdown;
    this._dropdown.setOrigin(this);
  }
  private _dropdown!: DropdownComponent;

  @HostListener('click')
  openDropdown() {
    this._dropdown.toggle();
  }
}

@Component({
  selector: 'trello-dropdown',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  isOpen = false;
  dropdownButton!: DropdownButtonDirective;
  private closedByOutsideClick = false;

  setOrigin(dropdownButton: DropdownButtonDirective): void {
    this.dropdownButton = dropdownButton;
  }

  toggle(): void {
    if (this.closedByOutsideClick) {
      this.closedByOutsideClick = false;
      return;
    }
    this.isOpen = !this.isOpen;
  }

  handleOutsideClick(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.closedByOutsideClick = true;
    }
  }
}
