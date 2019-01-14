import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Injectable()
export class EditCustomerResolver implements Resolve<any> {
  constructor(public firebaseService: FirebaseService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      let customerId = route.paramMap.get('id');
      this.firebaseService.getCustomer(customerId).subscribe(data => {
        resolve(data);
      });
    });
  }
}
