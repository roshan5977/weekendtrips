import {Injectable} from '@angular/core';

import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';

import { AuthService } from './authservice';
import { Observable } from 'rxjs';





@Injectable()
export class TokenInterceptor implements   HttpInterceptor{
    // constructor(public auth: AuthService) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const excludedUrls = ['/weekendtrip/pack/getallpackages','/weekendtrip/city/getallcities','/weekendtrip/coupon/findallcoupon','/openai/chat','/traveller/weekend/savetraveller','/payment/weekend/dopayment','/traveller/weekend/getalltravellers'];

        // Check if the request URL is in the excluded URLs
        // if (excludedUrls.some(url => request.url.includes(url))) {
        //   return next.handle(request); // Skip interception and pass the request through
        // }
        // request = request.clone({
        //   setHeaders: {
        //     Authorization: `Bearer ${this.auth.getToken()}`
        //   }
        // });
        // console.log("header set")
        // return next.handle(request);
    

const idToken = localStorage.getItem("token");

if (idToken) {
    const cloned = request.clone({
        headers: request.headers.set("Authorization",
            "Bearer " + idToken)
    });

    return next.handle(cloned);
}
else {
    return next.handle(request);
}


}
}