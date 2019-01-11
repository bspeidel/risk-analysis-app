import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss'],
})
export class NewCustomerComponent implements OnInit {
  customerForm: FormGroup;
  company: string = '';

  validation_messages = {
    company: [{ type: 'required', message: 'Company ist pflicht' }],
  };

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this.fb.group({
      company: ['', Validators.required],
      companyType: '',
      firstname: '',
      lastname: '',
      street: '',
      zipCode: '',
      city: '',
      phone: '',
      email: '',
    });
  }

  resetFields() {
    this.customerForm = this.fb.group({
      company: new FormControl('', Validators.required),
      companyType: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      street: new FormControl(''),
      zipCode: new FormControl(''),
      city: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
    });
  }

  onSubmit(value) {
    this.firebaseService.createCustomer(value).then(res => {
      this.resetFields();
      this.router.navigate(['customers']);
    });
  }
}
