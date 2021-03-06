import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ModuleAuthGuard implements CanLoad {

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  canLoad(): Promise<boolean> | boolean {
    if (!this.auth.isAuthenticated()) {
      return this.router.navigate(['login']);
    }
    return true;
  }
}