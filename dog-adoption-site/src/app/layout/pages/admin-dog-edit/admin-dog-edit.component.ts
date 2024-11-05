import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin-dog-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-dog-edit.component.html',
  styleUrl: './admin-dog-edit.component.css'
})
export class AdminDogEditComponent implements OnInit {
  dummyId: number = 1
  dummyName: String = 'Oreo'
  dummyAge: number = 3
  dummyGender: String = 'male'
  dummyVacc: boolean = true
  dummySter: boolean = false
  dummyDesc: String = "best boy best boy best boy woof woof"

  selectedGender!: String
  selectedVacc!: boolean
  selectedSter!: boolean

  ngOnInit(): void {
    this.selectedGender = this.dummyGender
    this.selectedVacc = this.dummyVacc
    this.selectedSter = this.dummySter
  }
}
