import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit{
  
  // todo authentication logic
  isAuthenticated = true;  
  userRole: string | null=null

  ngOnInit(): void {
    // this.userRole = 'admin'
  }

  getAccountRoute(): string {
    if (!this.isAuthenticated) {
      return '/sign-in';
    } else if (this.userRole === 'applicant') {
      return '/account';
    } else if (this.userRole === 'admin') {
      return '/admin';
    }
    return '/sign-in';  // Default
  }
}