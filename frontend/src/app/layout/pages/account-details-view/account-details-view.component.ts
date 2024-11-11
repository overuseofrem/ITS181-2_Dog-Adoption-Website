import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-details-view',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './account-details-view.component.html',
  styleUrl: './account-details-view.component.css'
})
export class AccountDetailsViewComponent {

  user: User = new User();

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access!');
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }

  deleteUser(): void {
    if (!this.user.id) {
      alert('ERROR: User ID is missing. Cannot delete user.');
      return;
    }

    const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) {
      return; 
    }

    this.userService.deleteUser(this.user.id).subscribe(
      response => {
        alert("User deleted successfully!");
        this.logout();        
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    );
  }

  logout(): void {
    this.authService.invalidateSession().subscribe(
      response => {
        alert(response.message);
        this.router.navigate(['/']);
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    );
  }
}
