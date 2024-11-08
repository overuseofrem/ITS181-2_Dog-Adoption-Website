import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-admin-adoptions',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-adoptions.component.html',
  styleUrl: './admin-adoptions.component.css'
})
export class AdminAdoptionsComponent {
  user: User = new User();
  nickname: string = "Admin";

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkUserSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
          this.nickname = user.name.replace(/ .*/, '');
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in-admin']);
        }
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
