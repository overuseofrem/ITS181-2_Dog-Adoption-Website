import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private apiUrl = 'http://localhost:18080/api/application/send'; 

  private http = inject(HttpClient)

  sendApplicationEmail(application: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, application);
  }
}
