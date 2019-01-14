import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: any[];
  customerSubscription: Subscription;
  searchValue: string = '';
  name_filtered_items: Array<any>;
  customerIdFromParent: string;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getCustomers().subscribe((customers: any[]) => {
      this.customers = customers;
      this.name_filtered_items = customers;
    });
  }

  viewDetails(customer) {
    this.router.navigate(['/edit/' + customer.payload.doc.id]);
  }

  newCustomer() {
    this.router.navigate(['/new-customer']);
  }

  searchByName() {
    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchCustomers(value).subscribe(result => {
      this.name_filtered_items = result;
    });
  }
}
