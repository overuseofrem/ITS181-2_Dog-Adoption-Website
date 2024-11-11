import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { UserService } from '../../../service/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-details-edit',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './account-details-edit.component.html',
  styleUrl: './account-details-edit.component.css'
})
export class AccountDetailsEditComponent implements OnInit {
  
  user: User = new User();
  selectedFile: File | null = null; 

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