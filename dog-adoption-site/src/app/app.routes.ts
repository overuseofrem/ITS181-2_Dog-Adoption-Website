import { Routes } from '@angular/router';
import { HomepageComponent } from './layout/pages/homepage/homepage.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { AccountComponent } from './layout/pages/account/account.component';
import { AboutUsComponent } from './layout/pages/about-us/about-us.component';
import { AdoptableDogsComponent } from './layout/pages/adoptable-dogs/adoptable-dogs.component';
import { DogProfileComponent } from './layout/pages/dog-profile/dog-profile.component';
import { SignUpComponent } from './layout/pages/sign-up/sign-up.component';
import { SignInComponent } from './layout/pages/sign-in/sign-in.component';
import { AccountDetailsViewComponent } from './layout/pages/account-details-view/account-details-view.component';
import { AccountDetailsEditComponent } from './layout/pages/account-details-edit/account-details-edit.component';
import { AdminComponent } from './layout/pages/admin/admin.component';
import { AdminDetailsViewComponent } from './layout/pages/admin-details-view/admin-details-view.component';
import { AdminDetailsEditComponent } from './layout/pages/admin-details-edit/admin-details-edit.component';
import { AdminAdoptionsComponent } from './layout/pages/admin-adoptions/admin-adoptions.component';
import { AdminDogsComponent } from './layout/pages/admin-dogs/admin-dogs.component';
import { AccountViewApplicationsComponent } from './layout/pages/account-view-applications/account-view-applications.component';
import { AdminAdoptionSubmissionViewComponent } from './layout/pages/admin-adoption-submission-view/admin-adoption-submission-view.component';
import { AdminDogProfileViewComponent } from './layout/pages/admin-dog-profile-view/admin-dog-profile-view.component';
import { AdminDogFormComponent } from './layout/pages/admin-dog-form/admin-dog-form.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Homepage' },
    { path: 'contact', component: ContactComponent,  title: 'Contact' },
    { path: 'about-us', component: AboutUsComponent,  title: 'About Us' },
    { path: 'adoptable-dogs', component: AdoptableDogsComponent,  title: 'Adoptable Dogs' },
    { path: 'dog-profile', component: DogProfileComponent,  title: 'Dog Profile' },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'account', component: AccountComponent},
    { path: 'account-details', component: AccountDetailsViewComponent},
    { path: 'account-details-edit', component: AccountDetailsEditComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'admin-details', component: AdminDetailsViewComponent},
    { path: 'admin-details-edit', component: AdminDetailsEditComponent},
    { path: 'admin-adoptions', component:AdminAdoptionsComponent},
    { path: 'admin-dogs', component:AdminDogsComponent}, 
    { path: 'account-view-applications', component: AccountViewApplicationsComponent},
    { path: 'admin-adoption-submission-view', component: AdminAdoptionSubmissionViewComponent},
    { path: 'admin-dog-profile-view', component: AdminDogProfileViewComponent},
    { path: 'admin-dog-form', component: AdminDogFormComponent},
];
