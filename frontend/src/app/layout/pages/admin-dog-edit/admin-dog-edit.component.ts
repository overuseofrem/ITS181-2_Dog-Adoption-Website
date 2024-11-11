import { Component, inject, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-admin-dog-edit',
  standalone: true,
  imports: [FormsModule],
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
    this.authService.checkAdminSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access.');
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

  fieldsAreComplete(): boolean {
    return this.dog.name && this.dog.age && this.dog.gender && this.dog.vacc != null && this.dog.ster != null && this.dog.description ? true : false;
  }

  updateDog(): void {
    if (!this.fieldsAreComplete()) {
      alert('ERROR: Please complete all fields.');
      console.log(this.dog);
    } else {
      this.dogService.updateDog(this.dog.id, this.dog).subscribe(
        response => {
          alert('Dog updated successfully!');
        },
        error => {
          const errorMsg = error?.error?.message || 'An unknown error occurred';
          alert('ERROR: ' + errorMsg);
        }
      );
    }    
  }

}
