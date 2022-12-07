import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Brand } from 'src/app/Models/Brand';
import {  catchError, Observable, throwError } from 'rxjs';
import { Type } from 'src/app/Models/Type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private apiURL = "https://localhost:7225/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type':'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // Call API
  getAll(): Observable<Type[]> {
    console.log(this.apiURL);
    return this.http.get<Type[]>(this.apiURL + '/Type')
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
