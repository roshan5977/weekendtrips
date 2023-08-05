import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
// constructor(public jwtHelper: JwtHelperService){

// }
  public getToken(): string {
    return localStorage.getItem('token') || "";
  }

//   public isAuthenticated(): boolean {
//     // get the token
//     const token = this.getToken();
//     // return a boolean reflecting 
//     // whether or not the token is expired
//     return !this.jwtHelper.isTokenExpired(token);
//     return true
// }
}