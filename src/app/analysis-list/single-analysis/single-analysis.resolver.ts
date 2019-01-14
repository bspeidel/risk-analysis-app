import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
@Injectable()
export class SingleAnalysisResolver implements Resolve<any> {
  constructor(public firebaseService: FirebaseService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      let analysisId = route.paramMap.get('id');
      this.firebaseService.getAnalysis(analysisId).subscribe(data => {
        resolve(data);
      });
    });
  }
}
