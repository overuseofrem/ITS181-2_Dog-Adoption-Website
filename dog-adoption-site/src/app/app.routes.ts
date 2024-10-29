import { Routes } from '@angular/router';
import { HomepageComponent } from './layout/pages/homepage/homepage.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { ContactMessageFormComponent } from './layout/pages/contact-message-form/contact-message-form.component';
import { SignUpComponent } from './layout/pages/sign-up/sign-up.component';
import { SignInComponent } from './layout/pages/sign-in/sign-in.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Homepage' },
    { path: 'contact', component: ContactComponent,
        children: [
            { path: '', component: ContactMessageFormComponent } // Default child route
        ]},
    { path: 'sign-up', component: SignUpComponent},
    { path: 'sign-in', component: SignInComponent}
];
