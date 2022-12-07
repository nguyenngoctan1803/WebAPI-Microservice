import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/Models/Brand';
import {  catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { const_string } from 'src/app/admin/auth/helper/const';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiURL = const_string.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // Call API
  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiURL + '/Brand')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getById(id?:number):Observable<Brand>{
    console.log(this.apiURL + '/Brand/' + id);
    return this.http.get<Brand>(this.apiURL + '/Brand/' + id)
    .pipe(
      catchError(this.errorHandler))
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
