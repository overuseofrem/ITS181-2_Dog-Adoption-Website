import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SidenavComponent, 
    FooterComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Doggo Forever';
}
