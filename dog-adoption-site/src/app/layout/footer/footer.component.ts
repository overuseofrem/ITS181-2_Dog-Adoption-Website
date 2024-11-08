import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

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
