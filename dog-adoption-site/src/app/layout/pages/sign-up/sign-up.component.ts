import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // For two-way binding with [(ngModel)]
import { User } from '../../../model/user.model';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User();
  password_confirm: string = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  addUser(): void {
    if (this.password_confirm !== this.user.password) {
      alert('ERROR: Passwords do not match');
    } else {
      this.user.role = "USER";
      this.authService.register(this.user).subscribe(
        response => {
          alert(response.message);
          this.router.navigate(['/sign-in']);
        },
        error => {
          const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
          alert(errorMsg);
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
