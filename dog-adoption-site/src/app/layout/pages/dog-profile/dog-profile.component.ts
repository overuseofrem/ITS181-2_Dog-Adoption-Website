import { Component, inject } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../../model/dog.model';
import { DogService } from '../../../service/dog.service';
import { User } from '../../../model/user.model';

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

  private route = inject(ActivatedRoute);
  private dogService = inject(DogService);
  private authService = inject(AuthService);
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
            alert('Successfully applied for adoption! We have sent your details to the local vet. Please wait for further instructions.')
            // todo add adoption record
            // todo send email to admin
          }
        } else {
          alert('ERROR: Please sign-in as a user to adopt');
        }
      }
    );
  }
}
