import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../../services/customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-customer',
  templateUrl: './single-customer.component.html',
  styleUrls: ['./single-customer.component.scss'],
})
export class SingleCustomerComponent implements OnInit {
  company: string;
  companyType: string;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.company = this.customersService.getCustomerById(+id).company;
    this.companyType = this.customersService.getCustomerById(+id).companyType;
  }
}
