import { Directive, OnInit, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight2]'
})
export class Highlight2Directive implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void { }

    @HostBinding('style.backgroundColor') background: string = 'transparent';
    @HostBinding('style.border') border: string = 'none';

    @HostListener('mouseenter')
    onmouseenter() {
        this.background = 'pink';
        this.border = 'red 20x solid';
    }

    @HostListener('mouseleave')
    onmouseleave() {
        this.background = 'transparent';
        this.border = 'none';
    }
}