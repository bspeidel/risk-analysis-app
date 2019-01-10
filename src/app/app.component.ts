import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'risk-analysis-app';

  constructor() {
    const config = {
      apiKey: 'AIzaSyAjFINs3t_kQEr7N9KE0E2nFHzlLB_oRDM',
      authDomain: 'risk-analysis-app.firebaseapp.com',
      databaseURL: 'https://risk-analysis-app.firebaseio.com',
      projectId: 'risk-analysis-app',
      storageBucket: '',
      messagingSenderId: '537802272409',
    };
    firebase.initializeApp(config);
  }
}
