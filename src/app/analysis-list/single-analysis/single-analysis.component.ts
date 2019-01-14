import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-single-analysis',
  templateUrl: './single-analysis.component.html',
  styleUrls: ['./single-analysis.component.scss'],
})
export class SingleAnalysisComponent implements OnInit {
  analysis: any;
  analysisForm: FormGroup;
  company: string;
  analysisDelete: boolean = false;

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
      companyOwning: new FormControl(),
    });

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      this.company = data.payload.data().companyName;
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
      companyStuff: this.analysis.companyStuff,
      companyOwning: this.analysis.companyOwning,
    });
  }

  onSubmit(value) {
    this.firebaseService.updateAnalysis(this.analysis.id, value);
  }
}
