import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // For two-way binding with [(ngModel)]
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User();
  password_confirm?: string;

  private authService = inject(AuthService);
  private router = inject(Router);

  fieldsAreComplete(): boolean {
    return this.user.name && this.user.username && this.user.password && this.user.contact && this.user.address ? true : false;
  }

  addUser(): void {
    if (this.password_confirm !== this.user.password) {
      alert('ERROR: Passwords do not match.');
    } else if (!this.fieldsAreComplete()) {
      alert('ERROR: Please complete all fields.');
    } else {
      this.user.role = "USER";
      this.user.img = "default-user.png"
      this.authService.register(this.user).subscribe(
        response => {
          alert(response.message);
          this.router.navigate(['/sign-in']);
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert("ERROR: " + errorMsg);
        }
      );
    }
  }
  
  onFocus() {
    const input = document.getElementById('contact') as HTMLInputElement;
    input.placeholder = "09991234567";
  }

  onBlur() {
    const input = document.getElementById('contact') as HTMLInputElement;
    input.placeholder = "Enter phone number...";
  }
  
}
