import { Component, inject, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-admin-dog-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-dog-edit.component.html',
  styleUrl: './admin-dog-edit.component.css'
})
export class AdminDogEditComponent implements OnInit {
  
  dog: Dog = new Dog();
  user: User = new User();
  selectedFile: File | null = null; 

  private route = inject(ActivatedRoute);
  private dogService = inject(DogService);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    //session
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

    this.getDogData();
  }

  getDogData(): void{
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.dogService.getDogById(id).subscribe(
          data => {
            this.dog = data;
          },
          error => {
            alert('ERROR: Error fetching dog details: ' + error);
          }
        );
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];
    }
  }

  uploadImage(): void {
    if (!this.selectedFile || !this.dog.id) {
      alert("ERROR: No file selected!");
      return;
    }

    this.dogService.uploadDogImage(this.dog.id, this.selectedFile).subscribe(
      (response) => {
        alert("Image uploaded successfully!");
        this.dog.img = response.img;
      },
      (error) => {
        alert("ERROR: Failed to upload image: " + error);
      }
    );
  }

  updateDog(): void {
    this.dogService.updateDog(this.dog.id, this.dog).subscribe(
      response => {
        alert('Dog updated successfully');
      },
      error => {
        alert('ERROR: Error updating country: ' + error);
      }
    );
  }

}
