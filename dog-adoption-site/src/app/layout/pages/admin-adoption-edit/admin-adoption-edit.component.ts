import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Adoption } from '../../../model/adoption.model';
import { User } from '../../../model/user.model';
import { AdoptionService } from '../../../service/adoption.service';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-adoption-edit',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-adoption-edit.component.html',
  styleUrl: './admin-adoption-edit.component.css'
})
export class AdminAdoptionEditComponent {
  
  user: User = new User();
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

  updateAdoption(): void{
    this.adoptionService.updateAdoption(this.adoption.id, this.adoption).subscribe(
      response => {
        alert('Adoption updated successfully');
      },
      error => {
        alert('ERROR: Error updating adoption: ' + error);
      }
    )
  }

}
