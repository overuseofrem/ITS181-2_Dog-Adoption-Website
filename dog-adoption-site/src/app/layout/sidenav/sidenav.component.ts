import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  ngOnInit() {
    this.setActiveLink();

    const navLinks = document.querySelectorAll('.nav-link-item');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    window.addEventListener('popstate', () => {
      this.setActiveLink();
    });
  }

  setActiveLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.replace(/^\/|\/$/g, '') || 'home';
    const navLinks = document.querySelectorAll('.nav-link-item');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = (link as HTMLAnchorElement).getAttribute('href');
      const page = href?.replace(/^\/|\/$/g, '') || 'home';
      
      if (page === currentPage) {
        link.classList.add('active');
      }
    });
  }
}