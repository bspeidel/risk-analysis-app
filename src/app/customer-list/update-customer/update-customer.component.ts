import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss'],
})
export class UpdateCustomerComponent implements OnInit {
  customer: any;
  customerForm: FormGroup;
  company: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.customerForm = new FormGroup({
      company: new FormControl(),
      companyType: new FormControl(),
      contact: new FormControl(),
      street: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
    });

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      this.company = data.payload.data().company;
      if (data) {
        this.customer = data.payload.data();
        this.customer.id = data.payload.id;
        this.initForm();
      }
    });
  }

  initForm() {
    this.customerForm = this.fb.group({
      company: [this.customer.company, Validators.required],
      companyType: this.customer.companyType,
      contact: this.customer.contact,
      street: this.customer.street,
      zipCode: this.customer.zipCode,
      city: this.customer.city,
      phone: this.customer.phone,
      email: [this.customer.email, Validators.email],
    });
  }

  onSubmit(value) {
    console.log(value);
    this.firebaseService.updateCustomer(this.customer.id, value);
    this.router.navigate(['customers']);
  }
}
