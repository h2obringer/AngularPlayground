import { OnInit, Input, Directive, Renderer2, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appClass]'
})
export class ClassDirective implements OnInit {
    constructor(private element: ElementRef, private renderer: Renderer2) { }

    @Input('appClass') set display(value: Object) {
        //this logic can be whatever you want it to be for this custom directive's behavior.
        // for (let entry of Object.entries(value)) {
        //     if (entry[1]) {
        //         this.renderer.addClass(this.element.nativeElement, entry[0]);
        //     }
        // }
        for (let [className, condition] of Object.entries(value)) { //array destructuring
            if (condition) {
                this.renderer.addClass(this.element.nativeElement, className);
            }
        }
    }

    ngOnInit(): void { }

}