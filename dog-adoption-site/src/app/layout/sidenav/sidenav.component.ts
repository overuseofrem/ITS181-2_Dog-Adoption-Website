import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  
  isAuthenticated = false;
  userRole: string | null = null;
  private authService = inject(AuthService);
  
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
    this.authService.userRole$.subscribe(
      role => this.userRole = role
    );
  }

  getAccountRoute(): string {
    if (!this.isAuthenticated) {
      return '/sign-in';
    } else if (this.userRole === 'USER') {
      return '/account';
    } else if (this.userRole === 'ADMIN') {
      return '/admin';
    }
    return '/sign-in';
  }
  
}