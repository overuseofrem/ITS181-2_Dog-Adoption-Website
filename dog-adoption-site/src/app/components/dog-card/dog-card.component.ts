import { Component, Input } from '@angular/core';
import { Dog } from '../../model/dog.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.css'
})
export class DogCardComponent { 
  @Input() dog!: Dog;
}
