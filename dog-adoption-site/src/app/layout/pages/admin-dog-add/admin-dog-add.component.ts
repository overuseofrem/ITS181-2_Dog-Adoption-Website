import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dog-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-dog-add.component.html',
  styleUrl: './admin-dog-add.component.css'
})
export class AdminDogAddComponent {
  dummyId!: number 
  dummyName!: String
  dummyAge!: number 
  dummyGender!: String 
  dummyVacc!: boolean 
  dummySter!: boolean 
  dummyDesc!: String 

  selectedGender!: String
  selectedVacc!: boolean
  selectedSter!: boolean

  ngOnInit(): void {
    this.selectedGender = this.dummyGender
    this.selectedVacc = this.dummyVacc
    this.selectedSter = this.dummySter
  }
}
