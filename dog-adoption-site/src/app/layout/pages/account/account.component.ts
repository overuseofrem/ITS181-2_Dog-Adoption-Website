import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  user: User = new User();
  nickname?: string;

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // check if there is a session
    this.authService.getSession().subscribe(
      response => {
        this.nickname = response.user.name.replace(/ .*/,'');
        this.user = response.user;
      },
      error => {
        const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
        alert(errorMsg);
        this.router.navigate(['/sign-in']);
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
