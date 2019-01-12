import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  authService: AuthService;
  userId: string;
  customerId: string;

  constructor(public db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
    });
  }

  getCustomer(customerKey) {
    return this.db
      .collection('customers')
      .doc(customerKey)
      .snapshotChanges();
  }

  getCustomers() {
    return this.db
      .collection('customers', ref => ref.where('userId', '==', this.userId))
      .snapshotChanges();
  }

  updateCustomer(customerKey, value) {
    value.nameToSearch = value.company.toLowerCase();
    return this.db
      .collection('customers')
      .doc(customerKey)
      .update(value);
  }

  searchCustomers(searchValue) {
    return this.db
      .collection('customers', ref =>
        ref
          .where('companyToSearch', '>=', searchValue)
          .where('companyToSearch', '<=', searchValue + '\uf8ff')
      )
      .snapshotChanges();
  }

  deleteCustomer(customerKey) {
    return this.db
      .collection('customers')
      .doc(customerKey)
      .delete();
  }

  createCustomer(value) {
    return this.db.collection('customers').add({
      userId: this.userId,
      customerId: this.db.createId(),
      company: value.company,
      companyToSearch: value.company.toLowerCase(),
      companyType: value.companyType,
      firstname: value.firstname,
      lastname: value.lastname,
      street: value.street,
      zipCode: value.zipCode,
      city: value.city,
      phone: value.phone,
      email: value.email,
    });
  }

  getAnalyses() {
    return this.db
      .collection('analysis', ref =>
        ref
          .where('userId', '==', this.userId)
          .where('customerId', '==', this.customerId)
      )
      .snapshotChanges();
  }

  getAnalysis(customerKey) {
    return this.db
      .collection('analysis')
      .doc(customerKey)
      .snapshotChanges();
  }

  createAnalysis(customerId) {
    return this.db.collection('analysis').add({
      userId: this.userId,
      customerId: customerId,
      analysisId: this.db.createId(),
      date: new Date(),
    });
  }
}
