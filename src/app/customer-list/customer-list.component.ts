import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FirestoreDataService } from './../services/firestore-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: any[];
  customerSubscription: Subscription;

  constructor(public _data: FirestoreDataService, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._data.getCustomers().subscribe((customers: any[]) => {
      this.customers = customers;
    });
  }

  viewDetails(customer) {
    console.log(customer.payload.doc.id);
    this.router.navigate(['/update/' + customer.payload.doc.id]);
  }

  newCustomer() {
    this.router.navigate(['/new-customer']);
  }
}
