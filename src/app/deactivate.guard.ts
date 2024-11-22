
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';



export interface IDeactivateComponent{
  canExit:()=>boolean;
}

export class DeactivateGuard implements CanDeactivate<IDeactivateComponent> {
  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,

    nextState?: RouterStateSnapshot): boolean {


    return component.canExit?component.canExit():false;
  }

}
