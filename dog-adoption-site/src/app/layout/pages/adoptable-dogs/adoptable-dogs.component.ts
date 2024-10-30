import { Component } from '@angular/core';
import { DogCardComponent } from '../../../components/dog-card/dog-card.component';

@Component({
  selector: 'app-adoptable-dogs',
  standalone: true,
  imports: [ DogCardComponent ],
  templateUrl: './adoptable-dogs.component.html',
  styleUrl: './adoptable-dogs.component.css'
})
export class AdoptableDogsComponent { }
