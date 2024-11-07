import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:18080/api'; 

  private http = inject(HttpClient);

  // Register a new user
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, user, { withCredentials: true });
  }

  // Login a user and create a session
  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, user, { withCredentials: true });
  }

  // Check if a session exists and retrieve user info
  getSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/session/get`, { withCredentials: true });
  }

  // Invalidate the current session (logout)
  invalidateSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/session/invalidate`, { withCredentials: true });
  }

}
