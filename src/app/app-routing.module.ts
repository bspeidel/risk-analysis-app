import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './customer-list/update-customer/update-customer.component';
import { UpdateCustomerResolver } from './customer-list/update-customer/update-customer.resolver';
import { SingleAnalysisComponent } from './analysis-list/single-analysis/single-analysis.component';
import { SingleAnalysisResolver } from './analysis-list/single-analysis/single-analysis.resolver';
import { NewCustomerComponent } from './customer-list/new-customer/new-customer.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {
    path: 'customers',
    canActivate: [AuthGuardService],
    component: CustomerListComponent,
  },
  {
    path: 'update/:id',
    canActivate: [AuthGuardService],
    component: UpdateCustomerComponent,
    resolve: { data: UpdateCustomerResolver },
  },
  {
    path: 'analysis/:id',
    canActivate: [AuthGuardService],
    component: SingleAnalysisComponent,
    resolve: { data: SingleAnalysisResolver },
  },
  {
    path: 'new-customer',
    canActivate: [AuthGuardService],
    component: NewCustomerComponent,
  },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', redirectTo: 'customers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
