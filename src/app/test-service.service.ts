import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http
    .get('https://jsonplaceholder.typicode.com/postss')
    // .pipe(catchError(this.handleError));
  }

  // handleError(err) {
  //   console.log(err);
  //   if (err instanceof HttpErrorResponse) {
  //     // Server Side Error
  //     console.log('Server Side Error');
  //   } else {
  //     // Client Side Error
  //     console.log('Client Side Error');
  //   }
  //   return throwError(err)
  // }

}
