import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { Adoption } from '../../../model/adoption.model';
import { AdoptionService } from '../../../service/adoption.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  
  user: User = new User();
  nickname: string = "User";
  adoptions: Adoption[] = []; 

  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);

  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
          this.nickname = user.name.replace(/ .*/, '');
          this.loadAdoptionsByUser();
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in']);
        }
      }
    );
  }

  loadAdoptionsByUser(): void {
    if(this.user.id){
      this.adoptionService.getAdoptionsByUser(this.user.id).subscribe(
        (data: Adoption[]) => {
          this.adoptions = data;
        },
        error => {
          alert('ERROR: Error fetching adoptions:' + error);
        }
      );
    }
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
