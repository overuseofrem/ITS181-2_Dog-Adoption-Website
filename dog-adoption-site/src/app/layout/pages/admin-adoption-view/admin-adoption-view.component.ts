import { Component, inject, OnInit } from '@angular/core';
import { AdoptionService } from '../../../service/adoption.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';
import { DogService } from '../../../service/dog.service';
import { Dog } from '../../../model/dog.model';
import { Adoption } from '../../../model/adoption.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-adoption-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-adoption-view.component.html',
  styleUrl: './admin-adoption-view.component.css'
})
export class AdminAdoptionViewComponent implements OnInit{

  user: User = new User();
  userApplicant: User = new User();
  adoption: Adoption = new Adoption();

  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);
  private router = inject(Router);
    
  ngOnInit(): void {
    this.authService.checkUserSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in-admin']);
        }
      }
    );

    this.getAdoptionData();
  }

  getAdoptionData(): void{
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.adoptionService.getAdoptionById(id).subscribe(
          data => {
            this.adoption = data;
          },
          error => {
            alert('ERROR: Error fetching adoption details: ' + error);
          }
        );
      }
    });
  }

}
