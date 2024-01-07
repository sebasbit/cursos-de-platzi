import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StylesService {
  private readonly STYLESHEET_LINK_ID = 'dynamic-stylesheet';

  private currentStylesheet = new BehaviorSubject<string>('styles.css');

  constructor(@Inject(DOCUMENT) private document: Document) {}

  updateStylesheet(route: string): void {
    let stylesheetName = this.getStylesheetName(route);

    if (stylesheetName !== this.currentStylesheet.value) {
      this.appendStylesheetLinkElement(stylesheetName);
      this.currentStylesheet.next(stylesheetName);
    }
  }

  private getStylesheetName(route: string): string {
    if (route.startsWith('/learning')) {
      return 'styles-learning.css';
    }

    if (route.startsWith('/ecommerce')) {
      return 'styles-ecommerce.css';
    }

    return 'styles.css';
  }

  private appendStylesheetLinkElement(stylesheetName: string): void {
    let stylesheetLink = this.document.getElementById(
      this.STYLESHEET_LINK_ID
    ) as HTMLLinkElement;

    if (stylesheetLink) {
      stylesheetLink.href = stylesheetName;
    } else {
      stylesheetLink = this.document.createElement('link');
      stylesheetLink.id = this.STYLESHEET_LINK_ID;
      stylesheetLink.rel = 'stylesheet';
      stylesheetLink.href = stylesheetName;
    }

    this.document.head.appendChild(stylesheetLink);
  }
}
