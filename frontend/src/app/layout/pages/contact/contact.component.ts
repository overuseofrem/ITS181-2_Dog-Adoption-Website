import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../../service/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  private contactService = inject(ContactService);

  fieldsAreComplete(): boolean {
    return this.name && this.email && this.message ? true : false;
  }

  sendInquiry(): void {
    if (!this.fieldsAreComplete()) {
      alert('ERROR: Please fill in all fields.');
    } else {
      const contactForm = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.contactService.sendContactForm(contactForm).subscribe(
        response => {
          alert(response.message);
          this.resetForm();
        },
        error => {
          const errorMsg = error?.error?.message || 'Your message cannot be sent right now. Please try again later.';
          alert("ERROR: " + errorMsg);
        }
      );
    }
  }

  private resetForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
