import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-admin-dog-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './admin-dog-view.component.html',
  styleUrl: './admin-dog-view.component.css'
})
export class AdminDogViewComponent {

  dog: Dog = new Dog();
  user: User = new User();

  private route = inject(ActivatedRoute);
  private dogService = inject(DogService);
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // session
    this.authService.checkAdminSession("ADMIN").subscribe(
      user => {
        if (user && user.name) {
          this.user = user;
        } else {
          alert('ERROR: Unauthorized access');
          this.router.navigate(['/sign-in-admin']);
        }
      }
    );

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
  
}
