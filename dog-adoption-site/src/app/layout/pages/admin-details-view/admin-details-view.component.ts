import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-details-view',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-details-view.component.html',
  styleUrl: './admin-details-view.component.css'
})
export class AdminDetailsViewComponent {
  dummyName: String = "Erich Erichsson"
  dummyEmail: String = "erichnoho@yahoo.com"
  dummyPassword: String = "theerich555042"
}
