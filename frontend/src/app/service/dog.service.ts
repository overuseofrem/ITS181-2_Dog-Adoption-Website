import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiUrl = 'http://localhost:18080/api/dogs' 

  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getDogById(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`);
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.apiUrl, dog);
  }

  updateDog(id: number, dog: Dog): Observable<Dog> {
    return this.http.put<Dog>(`${this.apiUrl}/${id}`, dog);
  }

  deleteDog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  uploadDogImage(id: number, imageFile: File): Observable<Dog> {
    const formData = new FormData();
    formData.append('image', imageFile, imageFile.name);
    return this.http.post<Dog>(`${this.apiUrl}/${id}/upload-dog-image`, formData);
  }

}
