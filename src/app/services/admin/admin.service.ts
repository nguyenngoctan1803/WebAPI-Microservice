import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Admin } from 'src/app/Models/Admin';
import { environment } from 'src/environments/environment';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { const_string } from 'src/app/admin/auth/helper/const';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiURL = const_string.baseUrl;
  private userSubject?: BehaviorSubject<Admin | null>;
  public admin?: Observable<Admin | null>;
  httpOptions = {
    headers: new HttpHeaders({
      'Comtent-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  // Call API

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
