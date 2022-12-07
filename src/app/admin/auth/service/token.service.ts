import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { const_string } from '../helper/const';



@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  logout():void{
    sessionStorage.clear();
  }

  public saveToken(token:string):void{
    sessionStorage.removeItem(const_string.TOKEN_KEY);
    sessionStorage.setItem(const_string.TOKEN_KEY, token);
  }
  public getToken():string |null{
    return sessionStorage.getItem("auth-token");
  }
  public saveUser(user:any):void{
    sessionStorage.removeItem(const_string.USER_KEY);
    sessionStorage.setItem(const_string.USER_KEY, JSON.stringify(user));
  }
  public getUser():any{
    const user = sessionStorage.getItem(const_string.USER_KEY)
    if(user)
    {
      return JSON.parse(user)
    }
  }
}
