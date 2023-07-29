import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _toastrService: ToastrService, private _router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res) {
          switch (res.status) {
            case 400:
              {
                if (res.error.errors) {
                  const modelStateErrors = [];
                  for (const key in res.error.errors) {
                    if (res.error.errors[key])
                      modelStateErrors.push(res.error.errors[key]);
                  }
                  throw modelStateErrors.flat();
                } else {
                  this._toastrService.error(res.error);
                }
              }
              break;
            case 401:
              this._toastrService.error(res.error, 'Unauthorized');
              break;
            case 404:
              this._router.navigateByUrl('/not-found');
              break;
            case 500:
              if (!environment.production) {
                const navigationExtras: NavigationExtras = {
                  state: { error: res.error },
                };
                this._router.navigateByUrl('/server-error', navigationExtras);
              } else {
                this._toastrService.error('Internal server error');
              }
              break;
            default:
              this._toastrService.error('Something unexcepted went wrong');
              if (!environment.production) console.log(res.error);
          }
        }
        throw res.error;
      })
    );
  }
}
