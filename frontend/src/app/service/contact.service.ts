import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:18080/api/contact/send'; 

  private http = inject(HttpClient)

  sendContactForm(contactForm: ContactForm): Observable<any> {
      return this.http.post<any>(this.apiUrl, contactForm);
  }

}
