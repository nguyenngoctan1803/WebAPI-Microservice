import { Injectable } from '@angular/core';
import{environment} from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/Models/Order';
import { Cart } from 'src/app/Models/Cart';
import { const_string } from 'src/app/admin/auth/helper/const';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiURL = const_string.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // Call API
  getAll(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiURL + '/Cart' )
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  addCart(cart:Cart):Observable<Cart>
  {
    return this.http.post<Cart>(this.apiURL + '/Cart',cart,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  updateCart(cart:Cart, id:number):Observable<Cart>
  {
    console.log(this.apiURL + '/Cart/' + id);
      return this.http.put<Cart>(this.apiURL + '/Cart/' + id, cart, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
