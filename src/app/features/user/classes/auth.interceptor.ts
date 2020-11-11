import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});

    // const currentUser = this.auth.currentUserValue;
    // if (currentUser && currentUser.token) {
    //  req = req.clone({
    //    setHeaders: {
    //      Authorization: `Bearer ${currentUser.token}`
   //     }
   //   });
   // }

    return next
      .handle(req)
      .pipe(catchError( err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.auth.logout();
            this.router.navigate(['/user', 'login']);
          }
        }
        return throwError(err);
        }
      ));
  }
}
