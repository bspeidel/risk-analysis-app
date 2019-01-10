import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FirestoreDataService } from './../services/firestore-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: any[];
  customerSubscription: Subscription;

  constructor(public _data: FirestoreDataService) {}

  ngOnInit() {
    this._data.getCustomers().subscribe((customers: any[]) => {
      this.customers = customers;
    });
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }
}
