import { environment } from './../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AnalysisListComponent } from './analysis-list/analysis-list.component';
import { SingleAnalysisComponent } from './analysis-list/single-analysis/single-analysis.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SingleCustomerComponent } from './customer-list/single-customer/single-customer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AuthService } from './services/auth.service';
import { CustomersService } from './services/customers.service';
import { CustomerService } from './services/customer.service';
import { AnalysisService } from './services/analysis.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FirestoreDataService } from './services/firestore-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AnalysisListComponent,
    SingleAnalysisComponent,
    CustomerListComponent,
    SingleCustomerComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    AuthService,
    CustomersService,
    AnalysisService,
    AuthGuardService,
    CustomerService,
    FirestoreDataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
