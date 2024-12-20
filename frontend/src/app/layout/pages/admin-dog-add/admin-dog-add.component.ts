import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-admin-dog-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-dog-add.component.html',
  styleUrl: './admin-dog-add.component.css'
})
export class AdminDogAddComponent implements OnInit{

  dog: Dog = new Dog();
  user: User = new User();

  private dogService = inject(DogService);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkAdminSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access!');
          this.router.navigate(['/sign-in-admin']);
        }
      }
    );
  }

  fieldsAreComplete(): boolean {
    return this.dog.name && this.dog.age && this.dog.gender && this.dog.vacc != null && this.dog.ster != null && this.dog.description ? true : false;
  }

  addDog(): void {
    if (!this.fieldsAreComplete()) {
      alert('ERROR: Please complete all fields.');
    } else {
      this.dogService.addDog(this.dog).subscribe(
        response => {
          this.dog.img = "default-dog.png";
          alert('Dog added successfully!');
          this.router.navigate(['/admin/dogs']);
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert('ERROR: ' + errorMsg);
        }
      );
    }    
  }
}
