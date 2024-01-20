import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  element = inject(ElementRef);

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
