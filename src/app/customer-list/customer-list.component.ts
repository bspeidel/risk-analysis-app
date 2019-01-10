import { CustomersService } from './../services/customers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Observable<any[]>;
  customerSubscription: Subscription;

  constructor(
    private customersService: CustomersService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.customers = this.db.collection('customers').valueChanges();
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }
}
