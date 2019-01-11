import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public constructor(
    public company: string,
    public companyType: string,
    public contact: string,
    public street: string,
    public zipCode: string,
    public city: string,
    public phone: string,
    public email: string
  ) {}
}
