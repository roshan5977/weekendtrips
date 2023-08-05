import { CanActivate, Router } from "@angular/router";
import {Injectable} from '@angular/core'
import { WeekendRepository } from "../model/weekend.repository";


@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(public auth:WeekendRepository,public router:Router){

    }

    canActivate():boolean{
        if(!this.auth.isloggedin()){
            this.router.navigate(["/login/",0])
         return false;
        }
        return true;
    }

}