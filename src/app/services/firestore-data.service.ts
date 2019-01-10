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
  customers: Observable<CustomerService[]>;
  customerDoc: AngularFirestoreDocument<CustomerService>;
  constructor(public _afs: AngularFirestore) {
    this.customers = this._afs.collection('Customers').valueChanges();

    /*     this.customerscollection = this._afs.collection('Customers', x =>
      x.orderBy('company', 'asc')
    );
    this.customers = this.customerscollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CustomerService;
        data.id = a.payload.doc.id;
        return data;
      });
    }); */
  }
  getCustomers() {
    return this.customers;
  }
  addCustomer(customer) {
    this.customerscollection.add(customer);
  }
  deleteCustomer(customer) {
    this.customerDoc = this._afs.doc('Customer/${customer.id}');
    this.customerDoc.delete();
  }
}
