import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appIf]'
})
export class IfDirective implements OnInit {
    constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    ngOnInit(): void { }

    @Input('appIf') set displayView(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.template);
        } else {
            this.viewContainer.clear();
        }
    }
}