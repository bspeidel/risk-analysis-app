import { environment } from './../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AnalysisListComponent } from './analysis-list/analysis-list.component';
import { SingleAnalysisComponent } from './analysis-list/single-analysis/single-analysis.component';
import { SingleAnalysisResolver } from './analysis-list/single-analysis/single-analysis.resolver';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './customer-list/edit-customer/edit-customer.component';
import { EditCustomerResolver } from './customer-list/edit-customer/edit-customer.resolver';
import { HeaderComponent } from './header/header.component';
import { NewCustomerComponent } from './customer-list/new-customer/new-customer.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FirebaseService } from './services/firebase.service';

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
    EditCustomerComponent,
    HeaderComponent,
    NewCustomerComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    FirebaseService,
    EditCustomerResolver,
    SingleAnalysisResolver,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
