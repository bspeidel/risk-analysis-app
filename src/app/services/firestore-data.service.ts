import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from './customer.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDataService {
  customerscollection: AngularFirestoreCollection<CustomerService>;
  customers: Observable<any[]>;
  customerDoc: AngularFirestoreDocument<CustomerService>;
  constructor(public db: AngularFirestore) {
    this.customers = this.db.collection('customers').valueChanges();
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    this.customerscollection.add(customer);
  }

  deleteCustomer(customer) {
    this.customerDoc = this.db.doc('Customer/${customer.id}');
    this.customerDoc.delete();
  }
}
