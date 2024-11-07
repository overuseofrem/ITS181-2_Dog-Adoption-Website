import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-details-edit',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './account-details-edit.component.html',
  styleUrl: './account-details-edit.component.css'
})
export class AccountDetailsEditComponent implements OnInit {
  
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

  updateUser(): void {
    if (!this.user.id) {
      alert('ERROR: User ID is missing. Cannot update user.');
      return;
    }
    
    this.userService.updateUser(this.user.id, this.user).subscribe(
      response => {
        alert('User updated successfully');
        this.router.navigate(['/account']);  // Navigate back to the dashboard
      },
      error => {
        alert('Error updating user: ' + error);
      }
    );
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
