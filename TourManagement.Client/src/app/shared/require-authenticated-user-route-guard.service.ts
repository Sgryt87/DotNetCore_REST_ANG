import {Injectable} from '@angular/core';
import {OpenIdConnectService} from "./open-id-connect.service";
import {Router, CanActivate} from "@angular/router";

@Injectable()
export class RequireAuthenticatedUserRouteGuardService implements CanActivate {

  constructor(private openIdConnectService: OpenIdConnectService, private router: Router) {
  }

  canActivate() {
    if (this.openIdConnectService.userAvailable) {
      return true;
    } else {
      this.openIdConnectService.triggerSignIn();
      return false;
    }
  }
}
