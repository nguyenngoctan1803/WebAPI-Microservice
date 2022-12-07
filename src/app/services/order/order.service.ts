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
export class OrderService {

  private apiURL = const_string.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // Call API
  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + '/Order')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getByGuid(guid:string): Observable<Order> {
    return this.http.get<Order>(this.apiURL + '/Order/' + guid)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  addOrder(order:Order):Observable<Order>
  {
    return this.http.post<Order>(this.apiURL + '/Order',order,this.httpOptions)
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
