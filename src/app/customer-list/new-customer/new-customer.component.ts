import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreDataService } from './../../services/firestore-data.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  company: string = '';

  arr: CustomerService[] = [];
  model = {
    company: '',
    companyType: '',
    contact: '',
    street: '',
    zipCode: '',
    city: '',
    phone: '',
    email: '',
  };
  constructor(
    public _data: FirestoreDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  customerSubmit() {
    this._data.addCustomer(this.model);
    this.model.company = '';
    this.model.companyType = '';
    this.model.contact = '';
    this.model.street = '';
    this.model.zipCode = '';
    this.model.city = '';
    this.model.phone = '';
    this.model.email = '';
    /*    console.log(value); */
    this.router.navigate(['customers']);
  }
}
