import {
  CdkOverlayOrigin,
  Overlay,
  OverlayModule,
  OverlayRef,
  STANDARD_DROPDOWN_BELOW_POSITIONS,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: 'button[trelloDropdownButtonFor], a[trelloDropdownButtonFor]',
  standalone: true,
  host: {
    '(click)': 'toggleDropdown()',
  },
})
export class DropdownButtonDirective {
  private overlayRef: OverlayRef | null = null;
  private portal: TemplatePortal | null = null;
  private dropdownClosedSubscription = Subscription.EMPTY;
  private isDropdownOpen = false;

  @Input({ required: true, alias: 'trelloDropdownButtonFor' })
  get dropdown(): DropdownComponent {
    return this._dropdown;
  }
  set dropdown(dropdown: DropdownComponent) {
    if (dropdown === this._dropdown) {
      return;
    }

    this._dropdown = dropdown;
    this.dropdownClosedSubscription.unsubscribe();

    if (dropdown) {
      this.dropdownClosedSubscription = dropdown.closed.subscribe(() => {
        this._destroyMenu();
      });
    }
  }
  private _dropdown!: DropdownComponent;

  constructor(
    private overlay: Overlay,
    private element: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  toggleDropdown(): void {
    return this.isDropdownOpen ? this.closeDropdown() : this.openDropdown();
  }

  openDropdown(): void {
    const dropdown = this._dropdown;

    if (this.isDropdownOpen || !dropdown) {
      return;
    }

    const overlayRef = this._createOverlay(dropdown);
    overlayRef.attach(this._getPortal(dropdown));

    this.isDropdownOpen = true;
  }

  closeDropdown(): void {
    this.dropdown?.closed.emit();
  }

  private _createOverlay(menu: DropdownComponent): OverlayRef {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.element)
          .withPositions(STANDARD_DROPDOWN_BELOW_POSITIONS),
      });
    }

    return this.overlayRef;
  }

  private _getPortal(dropdown: DropdownComponent): TemplatePortal {
    if (!this.portal || this.portal.templateRef !== dropdown.templateRef) {
      this.portal = new TemplatePortal(
        dropdown.templateRef,
        this.viewContainerRef
      );
    }

    return this.portal;
  }

  private _destroyMenu() {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    const dropdown = this.dropdown;
    this.overlayRef.detach();
    this.isDropdownOpen = false;
  }
}

@Component({
  selector: 'trello-dropdown',
  standalone: true,
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;

  @Output() readonly closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
