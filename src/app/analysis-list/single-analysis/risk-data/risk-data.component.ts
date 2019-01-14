import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-risk-data',
  templateUrl: './risk-data.component.html',
  styleUrls: ['./risk-data.component.scss'],
})
export class RiskDataComponent implements OnInit {
  analysis: any;
  analysisForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.analysisForm = new FormGroup({
      needLiabilityInsurance: new FormControl(),
      needContentInsurance: new FormControl(),
      needBuildingInsurance: new FormControl(),
      needElectronicsInsurance: new FormControl(),
      needMachineryInsurance: new FormControl(),
      needTransportInsurance: new FormControl(),
      needLegalInsurance: new FormControl(),
      needAccidentInsurance: new FormControl(),
    });

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.analysis = data.payload.data();
        this.analysis.id = data.payload.id;
        this.initForm();
      }
    });
  }

  initForm() {
    this.analysisForm = this.fb.group({
      needLiabilityInsurance: this.analysis.needLiabilityInsurance,
      needContentInsurance: this.analysis.needContentInsurance,
      needBuildingInsurance: this.analysis.needBuildingInsurance,
      needElectronicsInsurance: this.analysis.needElectronicsInsurance,
      needMachineryInsurance: this.analysis.needMachineryInsurance,
      needTransportInsurance: this.analysis.needTransportInsurance,
      needLegalInsurance: this.analysis.needLegalInsurance,
      needAccidentInsurance: this.analysis.needAccidentInsurance,
    });
  }

  onSubmit(value) {
    this.firebaseService.updateAnalysis(this.analysis.id, value);
  }
}
