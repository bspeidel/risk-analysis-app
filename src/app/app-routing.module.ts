import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './customer-list/edit-customer/edit-customer.component';
import { EditCustomerResolver } from './customer-list/edit-customer/edit-customer.resolver';
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
    path: 'edit/:id',
    canActivate: [AuthGuardService],
    component: EditCustomerComponent,
    resolve: { data: EditCustomerResolver },
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
