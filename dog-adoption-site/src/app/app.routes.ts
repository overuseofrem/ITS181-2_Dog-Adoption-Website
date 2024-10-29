import { Routes } from '@angular/router';
import { HomepageComponent } from './layout/pages/homepage/homepage.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { AboutUsComponent } from './layout/pages/about-us/about-us.component';
import { AdoptableDogsComponent } from './layout/pages/adoptable-dogs/adoptable-dogs.component';
import { DogProfileComponent } from './layout/pages/dog-profile/dog-profile.component';
import { SignUpComponent } from './layout/pages/sign-up/sign-up.component';
import { SignInComponent } from './layout/pages/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Homepage' },
    { path: 'contact', component: ContactComponent,  title: 'Contact' },
    { path: 'about-us', component: AboutUsComponent,  title: 'About Us' },
    { path: 'adoptable-dogs', component: AdoptableDogsComponent,  title: 'Adoptable Dogs' },
    { path: 'dog-profile', component: DogProfileComponent,  title: 'Dog Profile' },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'sign-in', component: SignInComponent}
];
