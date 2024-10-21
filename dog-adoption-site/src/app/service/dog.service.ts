import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private apiUrl = '###' // update this with SpringBoot API URL

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {

    return this.http.get<Dog[]>(this.apiUrl);

  }

}
