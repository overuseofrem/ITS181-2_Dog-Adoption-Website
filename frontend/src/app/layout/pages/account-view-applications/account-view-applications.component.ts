import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { Adoption } from '../../../model/adoption.model';
import { AdoptionService } from '../../../service/adoption.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-view-applications',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './account-view-applications.component.html',
  styleUrl: './account-view-applications.component.css'
})
export class AccountViewApplicationsComponent implements OnInit{

  user: User = new User();

  adoptions: Adoption[] = []; 

  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);
  
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
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

}
