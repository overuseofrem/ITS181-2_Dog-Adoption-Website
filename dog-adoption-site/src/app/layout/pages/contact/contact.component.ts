import { Component } from '@angular/core';
import { ContactMessageFormComponent } from '../contact-message-form/contact-message-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactMessageFormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {}
