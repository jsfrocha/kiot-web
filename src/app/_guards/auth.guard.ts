import { Injectable } from '@angular/core';
import {Router, CanActivate, CanLoad} from '@angular/router';
import {UserService} from "../_services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate() {
    if (!!this.userService.currentUser) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }

}
