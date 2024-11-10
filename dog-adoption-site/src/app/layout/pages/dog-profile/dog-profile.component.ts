import { Component, inject } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { User } from '../../../model/user.model';
import { Adoption } from '../../../model/adoption.model';
import { AdoptionService } from '../../../service/adoption.service';

@Component({
  selector: 'app-dog-profile',
  standalone: true,
  imports: [],
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.css'
})
export class DogProfileComponent {

  dog: Dog = new Dog();
  user: User = new User();
  adoption: Adoption = new Adoption();

  private route = inject(ActivatedRoute);
  private dogService = inject(DogService);
  private authService = inject(AuthService);
  private adoptionService = inject(AdoptionService);
  private router = inject(Router);

  ngOnInit(): void {
    // get data
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        console.log('Id: ' + id);
        this.dogService.getDogById(id).subscribe(data => {
          this.dog = data;
        });
      }
    });
  }

  checkSession(): void {
    this.authService.checkUserSession("USER").subscribe(
      user => {
        if (user) {
          this.user = user;
          if(confirm('Are you sure you want to apply for the adoption of ' + this.dog.name + '?')){
            this.createAdoption(); // create adoption record
          }
        } else {
          alert('ERROR: Please sign-in as a user to adopt');
        }
      }
    );
  }

  createAdoption(): void {
    if(this.user.id && this.dog.id){
      this.adoptionService.createAdoption(this.user.id, this.dog.id, this.adoption).subscribe(
        response => {
          alert('Successfully applied for adoption! We have sent your details to the local vet. Please wait for further instructions.')
          this.router.navigate(['/adoptable-dogs']);
        },
        error => {
          const errorMsg = error?.error?.message || 'ERROR: An unknown error occurred';
          alert(errorMsg);
        }
      )
    }
  }
}
