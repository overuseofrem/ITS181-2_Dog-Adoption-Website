import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user: User = new User();

  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    this.authService.login(this.user).subscribe(
      response => {
        alert("Login sucessful! Your session id is: " + response.sessionId);
        this.router.navigate(['/account']);
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    )
  }

}
