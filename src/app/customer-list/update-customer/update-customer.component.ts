import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss'],
})
export class UpdateCustomerComponent implements OnInit {
  company: string;
  customerForm: FormGroup;
  companyType: string;
  contact: string;
  street: string;
  zipCode: string;
  city: string;
  phone: string;
  email: string;
  formCustomer: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private router: Router
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
    this.customerForm = this.formBuilder.group({
      company: [this.company, Validators.required],
      companyType: this.companyType,
      contact: this.contact,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      phone: this.phone,
      email: [this.email, Validators.email],
    });
  }

  onSubmit() {
    const formValue = this.customerForm.value;
    const id = this.route.snapshot.params['id'];
    this.customersService.getCustomerById(+id).company = formValue.company;
    this.customersService.getCustomerById(+id).companyType =
      formValue.companyType;
    this.customersService.getCustomerById(+id).street = formValue.street;
    this.customersService.getCustomerById(+id).zipCode = formValue.zipCode;
    this.customersService.getCustomerById(+id).city = formValue.city;
    this.customersService.getCustomerById(+id).phone = formValue.phone;
    this.customersService.getCustomerById(+id).email = formValue.email;
    this.router.navigate(['customers']);
  }
}
