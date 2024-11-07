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
import { AdminAdoptionViewComponent } from './layout/pages/admin-adoption-view/admin-adoption-view.component';
import { AdminDogViewComponent } from './layout/pages/admin-dog-view/admin-dog-view.component';
import { AdminDogEditComponent } from './layout/pages/admin-dog-edit/admin-dog-edit.component';
import { AdminDogAddComponent } from './layout/pages/admin-dog-add/admin-dog-add.component';
import { AdminAddComponent } from './layout/pages/admin-add/admin-add.component';
import { SignInAdminComponent } from './layout/pages/sign-in-admin/sign-in-admin.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, title: 'Homepage' },
    { path: 'contact', component: ContactComponent,  title: 'Contact' },
    { path: 'about-us', component: AboutUsComponent,  title: 'About Us' },
    { path: 'adoptable-dogs', component: AdoptableDogsComponent,  title: 'Adoptable Dogs' },
    { path: 'dog-profile', component: DogProfileComponent,  title: 'Dog Profile' },
    { path: 'sign-up', component: SignUpComponent, title: 'Sign-up'},
    { path: 'sign-in', component: SignInComponent, title: 'Sign-in'},
    { path: 'sign-in-admin', component: SignInAdminComponent, title: 'Admin Sign-in'},
    // account pages
    { path: 'account', component: AccountComponent, title: 'My Dashboard'},
    { path: 'account/details/:id', component: AccountDetailsViewComponent, title: 'My Account Details'},
    { path: 'account/details/edit/:id', component: AccountDetailsEditComponent, title: 'My Account Details'},
    { path: 'account/applications', component: AccountViewApplicationsComponent, title: 'My Applications'},
    // admin pages
    { path: 'admin', component: AdminComponent, title: 'Admin Dashboard'},
    { path: 'admin/add', component: AdminAddComponent, title: 'Create New Admin'},
    { path: 'admin/details/:id', component: AdminDetailsViewComponent, title: 'Admin Details'},
    { path: 'admin/details/edit/:id', component: AdminDetailsEditComponent, title: 'Admin Details'},
    { path: 'admin/dogs', component:AdminDogsComponent, title: 'Manage Dogs'}, 
    { path: 'admin/dogs/view/:id', component: AdminDogViewComponent, title: 'Manage Dog Profile'},
    { path: 'admin/dogs/edit/:id', component: AdminDogEditComponent, title: 'Manage Dog Profile'},
    { path: 'admin/dogs/add', component: AdminDogAddComponent, title: 'Create New Dog'},
    { path: 'admin/adoptions', component:AdminAdoptionsComponent, title: 'Manage Adoptions'},
    { path: 'admin/adoptions/view/:id', component: AdminAdoptionViewComponent, title: 'Manage Adoption Application'},
];