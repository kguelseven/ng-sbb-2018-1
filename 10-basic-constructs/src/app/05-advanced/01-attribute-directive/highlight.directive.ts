import {Directive, ElementRef, Input, HostListener, OnInit} from '@angular/core';

@Directive({ selector: '[awHighlight]' })
export class HighlightDirective implements OnInit {

    private defaultColor = 'yellow';
    // @Input('awHighlight') highlightColor: string; // tslint:disable-line

    constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.highlight(this.defaultColor);
    // this.highlight(this.highlightColor || this.defaultColor);
  }

    private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.highlight(this.defaultColor);
    // }
    // @HostListener('mouseleave') onMouseLeave() {
    //     this.highlight(null);
    // }

}
