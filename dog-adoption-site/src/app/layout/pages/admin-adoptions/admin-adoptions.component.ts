import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { AdoptableDogsComponent } from '../adoptable-dogs/adoptable-dogs.component';
import { AdoptionService } from '../../../service/adoption.service';
import { Adoption } from '../../../model/adoption.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-adoptions',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-adoptions.component.html',
  styleUrl: './admin-adoptions.component.css'
})
export class AdminAdoptionsComponent {
  user: User = new User();
  nickname: string = "Admin";

  adoptions: Adoption[] = []; // Array to store adoption records

  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);

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

    this.loadAdoptions();
  }

  loadAdoptions(): void {
    this.adoptionService.getAllAdoptions().subscribe(
      (data: Adoption[]) => {
        this.adoptions = data;
      },
      error => {
        alert('ERROR: Error fetching adoptions:' + error);
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
