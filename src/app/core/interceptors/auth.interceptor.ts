import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../services/authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Интерцептор, перехватывающий ошибку Unauthorized
 * и перенаправляющий на форму входа.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private auth: AuthService, private snackbar: MatSnackBar) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ withCredentials: true });

    return next
      .handle(req)
      .pipe(catchError( err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/user', 'login']);
            this.snackbar.open('Для просмотра войдите в систему', 'Закрыть', {
              duration: 2000,
            });
          }
        }
        return throwError(err);
        }
      ));
  }
}
