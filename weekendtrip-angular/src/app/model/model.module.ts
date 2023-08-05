import { NgModule } from "@angular/core";
import {  WeekendRepository } from "./weekend.repository";
import {WeekendRestData } from "./weekend.restdata";
import { HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "../service/tokenInterceptor";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from "../service/authservice";
// import { AuthGuardService } from "../service/authguardservice";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
// import { RoleGuardService } from "../service/roleguardservice";

@NgModule({
  imports:[HttpClientModule],
  providers:[WeekendRepository,WeekendRestData,AuthService,/*AuthGuardService,RoleGuardService,*/
    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ]
})
export class ModelModule{

}
