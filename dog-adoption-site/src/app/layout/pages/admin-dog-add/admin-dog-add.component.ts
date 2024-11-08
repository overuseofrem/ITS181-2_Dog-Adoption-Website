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
  }

  addDog(): void {
    this.dogService.addDog(this.dog).subscribe(
      response => {
        this.dog.img = "default-dog.png";
        alert('Dog added successfully');
        this.router.navigate(['/admin/dogs']);  // Navigate to the dog list page
      },
      error => {
        alert('ERROR: Error adding dog: ' + error);
      }
    );
  }
}
