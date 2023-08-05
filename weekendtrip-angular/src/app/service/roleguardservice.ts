// import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
// import { AuthService } from "./authservice";
// import { decode } from "querystring";
// import {Injectable } from "@angular/core"

// @Injectable({
//     providedIn: 'root'
//   })
// export class RoleGuardService implements CanActivate{
//     constructor(public auth: AuthService, public router: Router) {}
//     canActivate(route: ActivatedRouteSnapshot): boolean {
//         // this will be passed from the route config
//         // on the data property
//         const expectedRole = route.data["expectedRole"];
//         const token = localStorage.getItem('token') || "";
//         // decode the token to get its payload
//         // if (
//         //   !this.auth.isAuthenticated() || 
//         // ) {
//         //   this.router.navigate(['login/:0']);
//         //   return false;
//         // }
//         // return true;
//       }
// }