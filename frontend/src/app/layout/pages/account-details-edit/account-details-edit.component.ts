import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  selectedFile: File | null = null; 

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  uploadImage(): void {
    if (!this.selectedFile || !this.user.id) {
      alert("ERROR: No file selected!");
      return;
    }

    this.userService.uploadUserImage(this.user.id, this.selectedFile).subscribe(
      (response) => {
        alert("Image uploaded successfully!");
        this.user.img = response.img;
      },
      (error) => {
        alert("ERROR: Failed to upload image.");
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
      },
      error => {
        alert('ERROR: Error updating user: ' + error);
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