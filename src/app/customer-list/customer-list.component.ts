import { CustomersService } from './../services/customers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FirestoreDataService } from './../services/firestore-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Observable<any[]>;
  customerSubscription: Subscription;
  arr: CustomersService[] = [];

  constructor(public _data: FirestoreDataService) {}

  ngOnInit() {
    /*     this.customers = this.db.collection('customers').valueChanges(); */
    this._data.getCustomers().subscribe((customer: CustomersService[]) => {
      this.arr = customer;
      console.log(this.arr);
    });
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }
}
