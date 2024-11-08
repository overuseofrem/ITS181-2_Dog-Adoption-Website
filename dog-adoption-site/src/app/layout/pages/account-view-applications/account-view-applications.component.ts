import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-account-view-applications',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-view-applications.component.html',
  styleUrl: './account-view-applications.component.css'
})
export class AccountViewApplicationsComponent implements OnInit{

  user: User = new User();
  nickname: string = "User";

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
          this.nickname = user.name.replace(/ .*/, '');
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }

}
