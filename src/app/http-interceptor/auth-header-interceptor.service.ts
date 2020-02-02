import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Auth header interceptor');
    console.log('request::::::' + JSON.stringify(request));
    console.log('next::::::' + JSON.stringify(next));
    const authReq = request.clone(
      {
        setHeaders: { Authorization: 'authToken' }
      }
    );
    return next.handle(authReq).pipe(
      // timeout(5),
      catchError(this.handleError)
      );
  }

  handleError(err) {
    console.log(err);
    if (err instanceof HttpErrorResponse) {
      // Server Side Error
      console.log('Server Side Error');
      debugger;
      switch (err.status) {
        case 404:
          console.log('404 not found');
          break;
  
        case 401:
          console.log('Unauthorized 401, route to login');
          break;
  
        case 500:
          console.log('Internal Server Error, 500');
          break;
  
        case 403:
          console.log('403 error');
          break;
  
        default:
          break;
      }
    } else {
      // Client Side Error
      console.log('Client Side Error');
    }
    return throwError(err)
  }

}
