import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const _token = 'saudiceos-api';
    const modifiedReq = req.clone({
      headers: req.headers.set('apiKey', _token)
    })
    return next.handle(modifiedReq)
  }
}