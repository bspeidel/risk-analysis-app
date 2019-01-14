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
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss'],
})
export class CompanyDataComponent implements OnInit {
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
      companySector: new FormControl(),
      companyStaff: new FormControl(),
      companyStuff: new FormControl(),
      isCompanyOwning: new FormControl(),
      hasVehicles: new FormControl(),
      hasElectronic: new FormControl(),
      hasMachines: new FormControl(),
      hasGoods: new FormControl(),
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
      companySector: this.analysis.companySector,
      companyStaff: this.analysis.companyStaff,
      isCompanyOwning: this.analysis.isCompanyOwning,
      hasVehicles: this.analysis.hasVehicles,
      hasElectronic: this.analysis.hasElectronic,
      hasMachines: this.analysis.hasMachines,
      hasGoods: this.analysis.hasGoods,
    });
  }

  defineNeed(value) {
    value.companySector == 'service'
      ? (value.hasGoods = false)
      : (value.hasGoods = true);

    value.hasVehicles
      ? (value.needTransportInsurance = true)
      : (value.needTransportInsurance = false);

    value.isCompanyOwning
      ? (value.needBuildingInsurance = true)
      : (value.needBuildingInsurance = false);

    value.hasElectronic
      ? (value.needElectronicsInsurance = true)
      : (value.needElectronicsInsurance = false);

    value.hasMachines
      ? (value.needMachineryInsurance = true)
      : (value.needMachineryInsurance = false);

    value.hasGoods
      ? (value.needContentInsurance = true)
      : (value.needContentInsurance = false);

    this.firebaseService.updateAnalysis(this.analysis.id, value);
  }

  onSubmit(value) {
    this.defineNeed(value);
  }
}
