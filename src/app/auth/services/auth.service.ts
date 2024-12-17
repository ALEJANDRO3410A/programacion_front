import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl="http://127.0.0.1:3000";  // Solo para pruebas

  private http=inject(HttpClient);

  constructor() { }

  loginConNest(credenciales: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales); 
  }

  registroConNest(datos: any) {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, datos); 
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/reset-password?token=${token}`, { newPassword });
  }
}
