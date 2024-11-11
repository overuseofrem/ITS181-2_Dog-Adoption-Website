import { Component, inject } from '@angular/core';
import { DogCardComponent } from '../../../components/dog-card/dog-card.component';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoptable-dogs',
  standalone: true,
  imports: [ DogCardComponent, CommonModule ],
  templateUrl: './adoptable-dogs.component.html',
  styleUrl: './adoptable-dogs.component.css'
})
export class AdoptableDogsComponent {

  dogs: Dog[] = [];

  private dogService = inject(DogService);

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(): void {
    this.dogService.getAllDogs().subscribe(
      (data: Dog[]) => {
        this.dogs = data; 
      },
      (error) => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    );
  }

}
