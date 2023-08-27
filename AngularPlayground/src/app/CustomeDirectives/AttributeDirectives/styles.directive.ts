import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void { }

    @Input('appStyle') set setStyle(styles: Object) {
        for (let [style, value] of Object.entries(styles)) {
            this.renderer.setStyle(this.element.nativeElement, style, value);
        }
    }
}