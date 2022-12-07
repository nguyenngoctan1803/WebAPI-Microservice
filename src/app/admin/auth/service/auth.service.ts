import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { const_string } from '../helper/const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = const_string.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(
    private http: HttpClient
  ) { }
  login(username:string, password:string):Observable<any>
  {
    var result =  this.http.post(this.apiURL + "/admin/login/" + username + "/" + password, {username, password},this.httpOptions);
    console.log(result);
    return result;
  }

}
