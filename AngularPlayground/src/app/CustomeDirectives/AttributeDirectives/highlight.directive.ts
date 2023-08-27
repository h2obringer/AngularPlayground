import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#F1248A');
        this.renderer.addClass(this.element.nativeElement, 'highlight');
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'Renderer2 Example');
    }

}