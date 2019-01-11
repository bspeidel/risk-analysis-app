import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from './customer.service';

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
    return this.db.collection('customers').snapshotChanges();
  }

  getCustomer(customerKey) {
    return this.db
      .collection('customers')
      .doc(customerKey)
      .snapshotChanges();
  }

  addCustomer(customer) {
    this.db.collection('customers').add(customer);
  }

  updateCustomer(customerKey, value) {
    value.nameToSearch = value.company.toLowerCase();
    return this.db
      .collection('customers')
      .doc(customerKey)
      .set(value);
  }

  deleteCustomer(customer) {
    this.customerDoc = this.db.doc('Customer/${customer.id}');
    this.customerDoc.delete();
  }
}
