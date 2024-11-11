import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in-admin',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-in-admin.component.html',
  styleUrl: './sign-in-admin.component.css'
})
export class SignInAdminComponent {
  user: User = new User();

  private authService = inject(AuthService);
  private router = inject(Router);

  loginAdmin(): void {
    this.authService.loginAdmin(this.user).subscribe(
      response => {
        alert("Login sucessful! Your session id is: " + response.sessionId);
        this.router.navigate(['/admin']);
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    )
  }
}
