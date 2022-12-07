import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { TokenService } from "../service/token.service";
import { const_string } from "./const";



@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private token: TokenService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken();
        if(token != null){
            authReq = req.clone({headers:req.headers.set(const_string.TOKEN_HEADER_KEY, 'Bearer' + token)})
        }
        return next.handle(authReq)
    }
}