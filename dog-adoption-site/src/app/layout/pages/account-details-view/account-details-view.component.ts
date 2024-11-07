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
  dummyName: String = "Erich Erichsson"
  dummyEmail: String = "erichnoho@yahoo.com"
  dummyPassword: String = "theerich555042"
  dummyContact: String = "09138495844"
  dummyAddress: String = "SomeRandoST., 2134 ave."

  user: User = new User();

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    // Fetch user data from session if available
    this.authService.getSession().subscribe(
      response => {
        if (response.user && response.user.id) {
          this.user = response.user; // Set the user from the session
        } else {
          alert('ERROR: User session not found');
          this.router.navigate(['/sign-in']);
        }
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert(errorMsg);
        this.router.navigate(['/sign-in']);
      }
    );
  }

  deleteUser(): void {
    // check if id is populated
    if (!this.user.id) {
      alert('ERROR: User ID is missing. Cannot delete user.');
      return;
    }

    // confirmation alert
    const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmation) {
      return; 
    }

    // delete account
    this.userService.deleteUser(this.user.id).subscribe(
      response => {
        alert("User delete success");
        this.logout();        
      },
      error => {
        const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
        alert(errorMsg);
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
        const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
        alert(errorMsg);
      }
    );
  }
}
