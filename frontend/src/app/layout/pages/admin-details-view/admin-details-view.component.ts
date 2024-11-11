import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-details-view',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './admin-details-view.component.html',
  styleUrl: './admin-details-view.component.css'
})
export class AdminDetailsViewComponent {

  user: User = new User();

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkAdminSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access!');
          this.router.navigate(['/sign-in-admin']);
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
        alert("User deleteD successfully!");
        this.logout();        
      },
      error => {
        const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
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
