import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight2]'
})
export class Highlight2Directive implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.background = this.defaultColor;
        this.border = this.defaultBorder;
    }

    @Input() defaultColor: string = 'transparent';
    @Input('appHighlight2') highlightColor: string = 'pink';
    @Input() defaultBorder: string = 'none';
    @Input() highlightBorder: string = 'red 2px solid';

    @HostBinding('style.backgroundColor') background: string = this.defaultColor;
    @HostBinding('style.border') border: string = this.defaultBorder;

    @HostListener('mouseenter')
    onmouseenter() {
        this.background = this.highlightColor;
        this.border = this.highlightBorder;
    }

    @HostListener('mouseleave')
    onmouseleave() {
        this.background = this.defaultColor;
        this.border = this.defaultBorder;
    }
}