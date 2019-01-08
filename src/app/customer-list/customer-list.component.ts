import { CustomersService } from './../services/customers.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: any[];
  customerSubscription: Subscription;
  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customerSubscription = this.customersService.customerSubject.subscribe(
      (customers: any[]) => {
        this.customers = customers;
      }
    );
    this.customersService.emitCustomerSubject();
  }

  ngOnDestroy() {
    this.customerSubscription.unsubscribe();
  }
}
