import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-admin-details-edit',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './admin-details-edit.component.html',
  styleUrl: './admin-details-edit.component.css'
})
export class AdminDetailsEditComponent implements OnInit {

  user: User = new User();
  selectedFile: File | null = null; 

  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  constructor(private http: HttpClient) {}

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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  uploadImage(): void {
    if (!this.selectedFile || !this.user.id) {
      alert("ERROR: No file selected.");
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

  fieldsAreComplete(): boolean {
    return this.user.name && this.user.contact && this.user.address ? true : false;
  }

  updateUser(): void {
    if (!this.fieldsAreComplete()) {
      alert('ERROR: Please complete all fields.');
    } else if (this.user.id) {
      this.userService.updateUser(this.user.id, this.user).subscribe(
        response => {
          alert('User updated successfully!');
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert('ERROR: ' + errorMsg);
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
