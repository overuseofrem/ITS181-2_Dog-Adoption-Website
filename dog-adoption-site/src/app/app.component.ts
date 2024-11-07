import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HttpClientModule,
    SidenavComponent, 
    FooterComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Doggo Forever';
}
