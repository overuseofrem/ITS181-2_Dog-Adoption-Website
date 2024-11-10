import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adoption } from '../model/adoption.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private baseUrl = 'http://localhost:18080/api/adoptions';

  constructor(private http: HttpClient) { }

  getAllAdoptions(): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(this.baseUrl);
  }

  getAdoptionById(id: number): Observable<Adoption> {
    return this.http.get<Adoption>(`${this.baseUrl}/${id}`);
  }

  getAdoptionsByUser(userId: number): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(`${this.baseUrl}/user/${userId}`);
  }

  getAdoptionsByDog(dogId: number): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(`${this.baseUrl}/dog/${dogId}`);
  }

  createAdoption(userId: number, dogId: number, adoption: Adoption): Observable<Adoption> {
    return this.http.post<Adoption>(`${this.baseUrl}?userId=${userId}&dogId=${dogId}`, adoption);
  }

  updateAdoption(id: number, adoption: Adoption): Observable<Adoption> {
    return this.http.put<Adoption>(`${this.baseUrl}/${id}`, adoption);
  }

  deleteAdoption(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteAdoptionByUserAndDog(userId: number, dogId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/user/${userId}/dog/${dogId}`);
  }
  
}
