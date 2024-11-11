import { Component, inject } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { User } from '../../../model/user.model';
import { Adoption } from '../../../model/adoption.model';
import { AdoptionService } from '../../../service/adoption.service';
import { CommonModule } from '@angular/common';
import { ApplicationService } from '../../../service/application.service';

@Component({
  selector: 'app-dog-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.css'
})
export class DogProfileComponent {

  dog: Dog = new Dog();
  user: User = new User();
  adoption: Adoption = new Adoption();
  adoptionExists: boolean = false;

  private route = inject(ActivatedRoute);
  private dogService = inject(DogService);
  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);
  private applicationService = inject(ApplicationService);
  private router = inject(Router);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.dogService.getDogById(id).subscribe(data => {
          this.dog = data;
          this.authenticate();
        });
      }
    });
  }

  authenticate(): void{
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
          this.checkIfAdopted();
        }
      }
    );
  }
  
  checkIfAdopted(): void {
    if(this.user.id && this.dog.id)
    this.adoptionService.getAdoptionsByUser(this.user.id).subscribe(
      adoptions => {
        this.adoptionExists = adoptions.some(adoption => adoption.dog?.id === this.dog.id);
      },
      error => {
      }
    );
  }

  checkSession(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user) {
          this.user = user;
          if(confirm('Are you sure you want to apply for the adoption of ' + this.dog.name + '?')){
            this.createAdoption();
          }
        } else {
          alert('ERROR: Please sign-in as a user to adopt.');
        }
      }
    );
  }

  createAdoption(): void {
    if(this.user.id && this.dog.id){
      this.adoptionService.createAdoption(this.user.id, this.dog.id, this.adoption).subscribe(
        response => {
          this.sendApplicationEmail();          
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert("ERROR: " + errorMsg);
        }
      )
    }
  }

  sendApplicationEmail(): void {
    const application = {
      userName: this.user.name,
      userEmail: this.user.username,
      contactNumber: this.user.contact,
      address: this.user.address,
      dogName: this.dog.name
    };

    this.applicationService.sendApplicationEmail(application).subscribe(
      response => {
        alert(response.message);
        this.router.navigate(['/account/applications']);
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    );
  }

  deleteAdoption(): void {
    if (this.user.id && this.dog.id) {
      this.adoptionService.deleteAdoptionByUserAndDog(this.user.id, this.dog.id).subscribe(
        () => {
          this.adoptionExists = false;
          alert('Adoption has been canceled successfully!');
          this.router.navigate(['/account/applications']);  
        },
        error => {
          const errorMsg = error?.error?.message || 'Could not cancel adoption. Please try again later.';
          alert("ERROR: " + errorMsg);
        }
      );
    }
  }
}
