import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-details-edit',
  standalone: true,
  imports: [],
  templateUrl: './admin-details-edit.component.html',
  styleUrl: './admin-details-edit.component.css'
})
export class AdminDetailsEditComponent {
  dummyName: String = "Erich Erichsson"
  dummyEmail: String = "erichnoho@yahoo.com"
  dummyPassword: String = "theerich555042"
}
