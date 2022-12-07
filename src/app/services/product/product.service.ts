import { Injectable } from '@angular/core';
import{environment} from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { const_string } from 'src/app/admin/auth/helper/const';
   
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = const_string.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // Call API
  getAll(): Observable<Product[]> {
    console.log(this.apiURL);
    return this.http.get<Product[]>(this.apiURL + '/Product')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id:number):Observable<Product>{
    console.log(this.apiURL + '/Product/' + id);
    return this.http.get<Product>(this.apiURL + '/Product/' + id)
    .pipe(
      catchError(this.errorHandler))
  }
  getByBrand(id:number):Observable<Product[]>{
    console.log(this.apiURL + '/Product/brand/' + id);
    return this.http.get<Product[]>(this.apiURL + '/Product/brand/' + id)
    .pipe(
      catchError(this.errorHandler))
  }
  getByType(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL + '/Product/type/' + id)
    .pipe(
      catchError(this.errorHandler))
  }
  updateProduct(product:Product, id:number):Observable<Product>
  {
      return this.http.put<Product>(this.apiURL + '/Product/' + id, product, this.httpOptions)
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
