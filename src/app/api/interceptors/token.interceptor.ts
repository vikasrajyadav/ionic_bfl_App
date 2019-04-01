import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  Router
} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    public toastController: ToastController, public storage: Storage) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('auth_token');
    // const token = 'test';
    if (token) {
      request = request.clone({
        setHeaders: {
           Authorization: `Bearer ${token}`
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.presentToast('Login failed');
          // if (error.error.success === false) {
          //   this.presentToast('Login failed');
          // } else {
          //  // this.router.navigate(['login']);
          // }
          localStorage.clear();
          this.storage.remove('currentUser');
        }
        return throwError(error);
      }));
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}