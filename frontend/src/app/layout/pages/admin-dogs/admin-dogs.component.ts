import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { Dog } from '../../../model/dog.model';
import { CommonModule } from '@angular/common';
import { DogService } from '../../../service/dog.service';

@Component({
  selector: 'app-admin-dogs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin-dogs.component.html',
  styleUrl: './admin-dogs.component.css'
})
export class AdminDogsComponent {
  user: User = new User();
  nickname: string = "Admin";

  dogs: Dog[] = [];

  private authService = inject(AuthService);
  private dogService = inject(DogService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.checkAdminSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
          this.nickname = user.name.replace(/ .*/, '');
        } else {
          alert('ERROR: Unauthorized access!');
          this.router.navigate(['/sign-in-admin']);
        }
      }
    );

    this.dogService.getAllDogs().subscribe(data => {
      this.dogs = data;
    });
  }

  logout(): void {
    this.authService.invalidateSession().subscribe(
      response => {
        alert(response.message);
        this.router.navigate(['/']);
      },
      error => {
        const errorMsg = error?.error?.message || 'An unknown error occurred';
        alert("ERROR: " + errorMsg);
      }
    );
  }

  deleteDog(id: number) {
    if (confirm('Are you sure you want to delete this dog?')){
      this.dogService.deleteDog(id).subscribe(() => {
          this.dogs = this.dogs.filter(c => c.id !== id);
          alert('Dog deleted successfully');
          this.ngOnInit();
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert("ERROR: " + errorMsg);
        }
      );
    }
  }
}
