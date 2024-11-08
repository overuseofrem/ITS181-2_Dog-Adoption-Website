import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-add',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  templateUrl: './admin-add.component.html',
  styleUrl: './admin-add.component.css'
})
export class AdminAddComponent implements OnInit {

  ngOnInit(): void {
    //todo sessions authentication
    // this.authService.checkUserSession("ADMIN").subscribe(
    //   user => {
    //     if (user && user.name) {
    //       this.user = user;
    //     } else {
    //       alert('ERROR: Unauthorized access');
    //       this.router.navigate(['/sign-in-admin']);
    //     }
    //   }
    // );
  }

  user: User = new User();
  password_confirm: string = "";

  private authService = inject(AuthService);
  private router = inject(Router);

  addUser(): void {
    if (this.password_confirm !== this.user.password) {
      alert('ERROR: Passwords do not match');
    } else {
      this.user.role = "ADMIN";
      this.user.img = "default-admin.png"
      this.authService.register(this.user).subscribe(
        response => {
          alert(response.message);
          this.router.navigate(['/sign-in-admin']);
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
