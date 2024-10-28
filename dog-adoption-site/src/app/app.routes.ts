import { Routes } from '@angular/router';
import { HomepageComponent } from './layout/pages/homepage/homepage.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { ContactMessageFormComponent } from './layout/pages/contact-message-form/contact-message-form.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Homepage' },
    { path: 'contact', component: ContactComponent,
        children: [
            { path: '', component: ContactMessageFormComponent } // Default child route
        ]},
];
