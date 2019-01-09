import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SingleCustomerComponent } from './customer-list/single-customer/single-customer.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {
    path: 'customers',
    canActivate: [AuthGuardService],
    component: CustomerListComponent,
  },
  {
    path: 'customers/:id',
    canActivate: [AuthGuardService],
    component: SingleCustomerComponent,
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', redirectTo: 'customers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
