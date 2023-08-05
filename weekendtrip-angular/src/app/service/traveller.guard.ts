import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WeekendRepository } from '../model/weekend.repository';

@Injectable({
  providedIn: 'root'
})
export class TravellerGuard implements CanActivate {
  constructor(private repo:WeekendRepository,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.repo.isloggedin()&&this.repo.currentuserrole=="user"){
       return true;
    }
    this.router.navigate(["/weekend"])
      return false;
  }
  
}
