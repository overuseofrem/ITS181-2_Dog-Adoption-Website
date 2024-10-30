import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-details-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-details-view.component.html',
  styleUrl: './account-details-view.component.css'
})
export class AccountDetailsViewComponent {
  dummyName: String = "Erich Erichsson"
  dummyEmail: String = "erichnoho@yahoo.com"
  dummyPassword: String = "theerich555042"
  dummyContact: String = "09138495844"
  dummyAddress: String = "SomeRandoST., 2134 ave."
}
