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

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, user, { withCredentials: true });
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, user, { withCredentials: true });
  }

  loginAdmin(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in-admin`, user, { withCredentials: true });
  }

  getSession(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/session/get`, { withCredentials: true }).pipe(
      tap(response => {
        if (response.user) {
          this.setAuthenticatedState(true, response.user.role);
        }
      })
    );
  }

  invalidateSession(): Observable<any> {
    return this.http.get(`${this.apiUrl}/session/invalidate`, { withCredentials: true }).pipe(
      tap(() => this.setAuthenticatedState(false, null))
    );
  }

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

  // Checks if user has role ADMIN
  checkAdminSession(role: string = "ADMIN"): Observable<User | null> {
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
