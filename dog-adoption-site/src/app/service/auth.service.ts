import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:18080/api'; 

  private http = inject(HttpClient);
  
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private userRoleSubject = new BehaviorSubject<string | null>(null);
  public userRole$ = this.userRoleSubject.asObservable();

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
    return this.http.get<any>(`${this.apiUrl}/session/get`, { withCredentials: true }).pipe(
      tap(response => {
        if (response.user) {
          this.setAuthenticatedState(true, response.user.role);
        }
      })
    );
  }

  // Invalidate the current session (logout)
  invalidateSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/session/invalidate`, { withCredentials: true }).pipe(
      tap(() => this.setAuthenticatedState(false, null))
    );
  }

  // Set authentication state
  setAuthenticatedState(isAuthenticated: boolean, role: string | null = null) {
    this.isAuthenticatedSubject.next(isAuthenticated);
    this.userRoleSubject.next(role);
  }

  // Checks if user has role USER
  checkUserSession(role: string = "USER"): Observable<User | null> {
    return this.getSession().pipe(
      map(response => {
        if (response && response.user && response.user.role === role) {
          return response.user;
        } else {
          return null; // No valid session or wrong role
        }
      }),
      catchError(() => of(null)) // In case of error, return null
    );
  }

}
