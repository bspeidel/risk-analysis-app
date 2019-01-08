import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.scss'],
})
export class SingleCustomerComponent implements OnInit {
  company: string;
  companyType: string;
  contact: string;
  street: string;
  zipCode: string;
  city: string;
  phone: string;
  email: string;
  formCustomer: FormGroup;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.company = this.customersService.getCustomerById(+id).company;
    this.companyType = this.customersService.getCustomerById(+id).companyType;
    this.contact = this.customersService.getCustomerById(+id).contact;
    this.street = this.customersService.getCustomerById(+id).street;
    this.zipCode = this.customersService.getCustomerById(+id).zipCode;
    this.city = this.customersService.getCustomerById(+id).city;
    this.phone = this.customersService.getCustomerById(+id).phone;
    this.email = this.customersService.getCustomerById(+id).email;
    this.initForm();
  }

  initForm() {
    this.formCustomer = new FormGroup({
      company: new FormControl(this.company),
      companyType: new FormControl(this.companyType),
      contact: new FormControl(this.contact),
      street: new FormControl(this.street),
      zipCode: new FormControl(this.zipCode),
      city: new FormControl(this.city),
      phone: new FormControl(this.phone),
      email: new FormControl(this.email),
    });
  }
}
