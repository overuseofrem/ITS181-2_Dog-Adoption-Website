import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details-edit',
  standalone: true,
  imports: [],
  templateUrl: './account-details-edit.component.html',
  styleUrl: './account-details-edit.component.css'
})
export class AccountDetailsEditComponent {
  dummyName: String = "Erich Erichsson"
  dummyEmail: String = "erichnoho@yahoo.com"
  dummyPassword: String = "theerich555042"
  dummyContact: String = "09138495844"
  dummyAddress: String = "SomeRandoST., 2134 ave."

  onFocus() {
    const input = document.getElementById('contact') as HTMLInputElement;
    input.placeholder = "09991234567";
  }

  onBlur() {
    const input = document.getElementById('contact') as HTMLInputElement;
    input.placeholder = "Enter phone number...";
  }
}
