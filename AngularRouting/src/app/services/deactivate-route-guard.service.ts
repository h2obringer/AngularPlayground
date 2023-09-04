import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

export interface IDeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateRouteGuardService implements CanDeactivate<IDeactivateComponent>{
    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canExit();
    }
}